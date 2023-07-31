import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string,
  justify?: string
  align?: string
  wrap?: string
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  justify-content: ${({justify}) => justify || 'flex-start'};
  align-items: ${({align}) => align || 'stretch'};
  flex-wrap: ${({wrap}) => wrap || 'nowrap'};
`