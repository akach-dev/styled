import React from 'react';
import {Header} from "./layout/header/Header";
import {Hero} from "./layout/sections/hero/Hero";
import {Wrapper} from "./components/Wrapper";
import {Footer} from "./layout/footer/Footer";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Contact} from "./layout/sections/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";

function App() {
  return (
     <Wrapper>
       <Header/>
       <main>
         <Hero/>
         <Skills/>
         <Works/>
         <Testimony/>
         <Contact/>
         <Slogan/>
       </main>
       <Footer/>
     </Wrapper>
  );
}

export default App;
