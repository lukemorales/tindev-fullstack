import React, { useState, useEffect } from 'react';
import { Image, Dimensions, PanResponder, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import io from 'socket.io-client';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  CardsContainer,
  AnimatedCard,
  Avatar,
  InfoWrapper,
  Name,
  Bio,
  Footer,
  FooterButton,
  MatchContainer,
  MatchSymbol,
  MatchAvatar,
  MatchName,
  MatchBio,
  MatchButtonText,
  AnimatedTag,
  TagText,
} from './Main_Styles';

import logo from '~/assets/logo.png';
import like from '~/assets/like.png';
import dislike from '~/assets/dislike.png';
import itsamatch from '~/assets/itsamatch.png';

import api from '~/services/api';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Main({ navigation }) {
  const ID = navigation.getParam('user');
  const [users, setUsers] = useState([]);
  const [itsAMatch, setItsAMatch] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await api.get('devs', {
        headers: {
          user: ID,
        },
      });

      setUsers(response.data);
    })();
  }, [ID]);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: ID },
    });

    socket.on('match', dev => {
      setItsAMatch(dev);
    });
  }, [ID]);

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }

  async function handleDislike() {
    const [user, ...rest] = users;

    await api.post(`devs/${user._id}/dislikes`, null, {
      headers: {
        user: ID,
      },
    });

    setUsers(rest);
  }

  async function handleLike() {
    const [user, ...rest] = users;

    await api.post(`devs/${user._id}/likes`, null, {
      headers: {
        user: ID,
      },
    });

    setUsers(rest);
  }

  const position = new Animated.ValueXY();

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
    outputRange: ['-10deg', '10deg'],
    extrapolate: 'clamp',
  });

  const rotateAndTranslate = {
    transform: [
      { rotate },
      { translateX: position.x },
      { translateY: position.y },
    ],
  };

  const nextCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });

  const nextCardScale = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.85, 1],
    extrapolate: 'clamp',
  });

  const likeOpacity = position.x.interpolate({
    inputRange: [50, SCREEN_WIDTH / 2],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const dislikeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, -50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const panReponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gesture) => true,
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 120) {
        handleLike();
        Animated.spring(position, {
          toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
        }).start();
      } else if (gestureState.dx < -120) {
        handleDislike();
        Animated.spring(position, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
        }).start();
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
        }).start();
      }
    },
  });

  return (
    <Container>
      <TouchableOpacity onPress={handleLogout}>
        <Image source={logo} />
      </TouchableOpacity>

      <CardsContainer>
        {users.map((user, index) => {
          if (index === 0) {
            return (
              <AnimatedCard
                key={user._id}
                style={[
                  {
                    zIndex: users.length - index,
                  },
                  rotateAndTranslate,
                ]}
                {...panReponder.panHandlers}
              >
                <AnimatedTag style={{ opacity: likeOpacity }} action="like">
                  <TagText action="like">LIKE</TagText>
                </AnimatedTag>

                <AnimatedTag
                  style={{ opacity: dislikeOpacity }}
                  action="dislike"
                >
                  <TagText action="dislike">NOPE</TagText>
                </AnimatedTag>

                <Avatar source={{ uri: user.avatar }} />

                <InfoWrapper>
                  <Name>{user.name}</Name>
                  <Bio>{user.bio}</Bio>
                </InfoWrapper>
              </AnimatedCard>
            );
          } else {
            return (
              <AnimatedCard
                key={user._id}
                style={{
                  zIndex: users.length - index,
                  opacity: index === 1 ? nextCardOpacity : 0,
                  transform: [{ scale: nextCardScale }],
                }}
              >
                <Avatar source={{ uri: user.avatar }} />

                <InfoWrapper>
                  <Name>{user.name}</Name>
                  <Bio>{user.bio}</Bio>
                </InfoWrapper>
              </AnimatedCard>
            );
          }
        })}
      </CardsContainer>

      {users.length > 0 && (
        <Footer>
          <FooterButton onPress={handleDislike}>
            <Image source={dislike} />
          </FooterButton>
          <FooterButton onPress={handleLike}>
            <Image source={like} />
          </FooterButton>
        </Footer>
      )}

      {itsAMatch && (
        <MatchContainer>
          <MatchSymbol source={itsamatch} />
          <MatchAvatar
            source={{
              uri: itsAMatch.avatar,
            }}
          />
          <MatchName>{itsAMatch.name}</MatchName>
          <MatchBio>{itsAMatch.bio}</MatchBio>

          <TouchableOpacity onPress={() => setItsAMatch(null)}>
            <MatchButtonText>Close</MatchButtonText>
          </TouchableOpacity>
        </MatchContainer>
      )}
    </Container>
  );
}
