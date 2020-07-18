import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 140 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 60px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  align-items: center;
  justify-content: center;
  padding: 16px 0;

  flex-direction: row;
`;
export const BackToSignInText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 16px;
  font-family: 'RobotoSlab-Regular';
`;
