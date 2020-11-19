import styled from "@emotion/styled";
import { colors } from "../styles";

const TextBox = styled.div`
  color: ${colors.text.primary};
  background: ${colors.background.default};
  -webkit-box-shadow: 2px 2px 5px 0px #ccc; 
  box-shadow: 2px 2px 5px 0px #ccc;
  padding: 8px 16px;
  font-weight: 500;
  margin: 8px auto;
`;

export default TextBox;