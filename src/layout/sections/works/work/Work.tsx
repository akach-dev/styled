import {FC} from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from '../Works_Styles';

type WorkPropsType = {
  src: string
  title: string
  text: string
}

export const Work: FC<WorkPropsType> = ({src, text, title}: WorkPropsType) => {
  return (
     <S.Work>
       <S.ImageWrapper>
         <S.Image src={src} alt={'work img'}/>
         <Button>view project</Button>
       </S.ImageWrapper>
       <S.Body>
         <h3>{title}</h3>
         <p>{text}</p>
         <Link href={'#'}>demo</Link>
         <Link href={'#'}>Code</Link>
       </S.Body>
     </S.Work>
  );
};




