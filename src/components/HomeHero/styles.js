import styled from "styled-components";
import { colors } from "../../identity";

export const Box = styled.div`
  background: ${colors.yellow};
  width: 100%;
  height: 45vh;
`;

export const LogoBox = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

export const LogoSpan = styled.div`
  display: block;
  width: 200px;
  height: 200px;
  outline: 1px solid ${colors.black};
`;
