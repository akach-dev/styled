import styled from "styled-components";
import {Container} from "../../components/Container";

const Header = styled.header`
  background-color: rgba(2, 2, 9, 0.5);
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
`
const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const S = {
  Header, HeaderContainer
}