import React, {FC} from 'react';
import {Title} from "../../../components/Title";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contact_Styles';

export const Contact: FC = () => {
  return (
     <S.Contact>
       <Container>
         <Title>Contact</Title>
         <S.Form>
           <S.Field placeholder={'Name'}/>
           <S.Field placeholder={'second Name'}/>
           <S.Field placeholder={'message'} as={'textarea'}/>
           <Button>Send message</Button>
         </S.Form>
       </Container>
     </S.Contact>
  );
};


