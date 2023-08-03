import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopBtn = () => {

  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false)
    })
  }, []);

  return (
     <>
       {
          showBtn && (
             <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
               <Icon
                  width={'16'}
                  height={'15'}
                  viewBox={'0 0 16 15'}
                  iconId={'arrowGoTop'}/>
             </StyledGoTopBtn>
          )
       }
     </>
  )
};
const StyledGoTopBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  inset: auto 30px 30px auto;
  padding: 7px;
  width: 30px;
  height: 30px;
`