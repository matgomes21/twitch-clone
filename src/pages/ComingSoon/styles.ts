import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Wrapper = styled.View`
  background: ${colors.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${colors.purple};
  font-family: roboto;
  font-weight: 500;
  font-size: 30px;
`;
