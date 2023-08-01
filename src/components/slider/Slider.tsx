import React, {FC} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles';
import '../../styles/slider.css'

type SlidePropsTypes = {
  name: string
  text: string
}

const Slide = ({name, text}: SlidePropsTypes) => {
  return (
     <S.Slide>
       <p>{text}</p>
       <S.Name>@{name}</S.Name>
     </S.Slide>
  )
}

const items = [
  <Slide
     text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid amet cupiditate delectus est molestiae nostrum provident tenetur veritatis? Aliquam dicta earum laboriosam maiores pariatur perspiciatis quos recusandae repudiandae.'}
     name={'ivan ivanow'}/>,
  <Slide
     text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur cumque ea magnam nobis perspiciatis possimus, rerum voluptatibus. Adipisci alias delectus eum impedit nihil optio praesentium sed sit veniam voluptas?'}
     name={'alex kach'}/>,
  <Slide
     text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nostrum nulla numquam quibusdam, reprehenderit sunt tempora tenetur voluptatem voluptatibus voluptatum. Alias dolorem dolores enim excepturi harum hic laboriosam non, quia.'}
     name={'max kach'}/>,
];

export const Slider: FC = () => (

   <S.Slider>
     <AliceCarousel
        animationType="fadeout"
        animationDuration={800}
        disableButtonsControls
        infinite
        items={items}
        mouseTracking
     />
   </S.Slider>


);


