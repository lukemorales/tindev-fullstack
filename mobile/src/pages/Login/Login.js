import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Platform, Image } from 'react-native';

import {
  Container,
  Input,
  SubmitButton,
  SubmitButtonText,
} from './Login_Styles';

import logo from '~/assets/logo.png';

import api from '~/services/api';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main', { user });
      }
    });
  }, [navigation]);

  async function handleSubmit() {
    const response = await api.post('devs', {
      username,
    });

    const { _id: user } = response.data;

    await AsyncStorage.setItem('user', user);

    navigation.navigate('Main', { user });
  }

  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Image source={logo} />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter Your GitHub Username"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />

      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>Login</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}
