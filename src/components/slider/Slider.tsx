import React, {FC} from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from './Slider_Styles';

export const Slider: FC = () => {
  return (
     <S.Slider>
       <FlexWrapper>
         <S.Slide>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
             dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           <S.Name>@ivan ivanow</S.Name>
         </S.Slide>
       </FlexWrapper>S.
       <S.Pagination>
         <span> </span>
         <span className={'active'}> </span>
         <span> </span>
       </S.Pagination>
     </S.Slider>
  );
};

