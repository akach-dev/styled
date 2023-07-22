import React from 'react';
import {Header} from "./layout/header/Header";
import {Hero} from "./layout/sections/hero/Hero";
import {Wrapper} from "./components/Wrapper";
import {Footer} from "./layout/footer/Footer";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";

function App() {
  return (
     <Wrapper>
       <Header/>
       <main>
         <Hero/>
         <Skills/>
         <Works/>
         <Testimony/>
       </main>
       <Footer/>
     </Wrapper>
  );
}

export default App;
