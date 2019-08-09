import styled from 'styled-components/native';
import { TextInput, RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #282a36;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Input = styled(TextInput)`
  margin: 20px 0 10px;
  align-self: stretch;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 48px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  background: #f8f8f2;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SubmitButton = styled(RectButton)`
  border-radius: 4px;
  height: 48px;
  background: #df4723;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;
