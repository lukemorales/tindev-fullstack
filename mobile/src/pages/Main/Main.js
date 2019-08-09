import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import {
  Container,
  CardsContainer,
  Card,
  Avatar,
  InfoWrapper,
  Name,
  Bio,
  Footer,
  FooterButton,
} from './Main_Styles';

import logo from '~/assets/logo.png';
import like from '~/assets/like.png';
import dislike from '~/assets/dislike.png';

import api from '~/services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default function Main({ navigation }) {
  const ID = navigation.getParam('ID');
  const [users, setUsers] = useState([]);

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

  return (
    <Container>
      <TouchableOpacity onPress={handleLogout}>
        <Image source={logo} />
      </TouchableOpacity>

      <CardsContainer>
        {users.map((user, index) => (
          <Card key={user._id} style={{ zIndex: users.length - index }}>
            <Avatar source={{ uri: user.avatar }} />

            <InfoWrapper>
              <Name>{user.name}</Name>
              <Bio>{user.bio}</Bio>
            </InfoWrapper>
          </Card>
        ))}
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
    </Container>
  );
}
