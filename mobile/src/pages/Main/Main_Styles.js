import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';

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

export const AnimatedCard = styled(Animated.View)`
  background: #44475a;
  border: 1px solid #44475a;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  elevation: 3;
`;

export const AnimatedTag = styled(Animated.View)`
  position: absolute;
  top: 36px;
  left: ${({ action }) => (action === 'like' ? '20px' : 'auto')};
  right: ${({ action }) => (action === 'dislike' ? '20px' : 'auto')};
  transform: ${({ action }) =>
    action === 'like' ? 'rotate(-30deg)' : 'rotate(30deg)'};
  z-index: 2;
  border-width: 6px;
  border-color: ${({ action }) => (action === 'like' ? 'green' : 'red')};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const TagText = styled.Text`
  color: ${({ action }) => (action === 'like' ? 'green' : 'red')};
  font-size: 32px;
  font-weight: bold;
  padding: 4px 10px;
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

export const MatchContainer = styled.View`
  background: rgba(0, 0, 0, 0.85);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  elevation: 15;
  z-index: 999;
`;

export const MatchSymbol = styled.Image`
  margin-bottom: 50px;
  height: 60px;
  resize-mode: contain;
`;

export const MatchAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 5px;
  border-color: #44475a;
`;

export const MatchName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

export const MatchBio = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding: 0 30px;
`;

export const MatchButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-top: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;
