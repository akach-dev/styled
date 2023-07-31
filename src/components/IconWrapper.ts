import styled from "styled-components";

export const IconWrapper = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 70px;
  }

  &::before {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%) rotate(45deg);
    display: inline-block;
    content: '';
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.10);
  }
`