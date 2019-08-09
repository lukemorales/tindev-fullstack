import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #282a36;
  justify-content: space-between;
  align-items: center;
  padding: 60px 30px;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const Card = styled.View`
  background: #44475a;
  border: 1px solid #44475a;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;

export const InfoWrapper = styled.View`
  padding: 15px 20px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  line-height: 20px;
  color: #ccccc7;
  margin-top: 5px;
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const FooterButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #44475a;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  elevation: 2;
  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5); */
`;
