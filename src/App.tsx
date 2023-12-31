import React from 'react';
import {Header} from "./layout/header/Header";
import {Wrapper} from "./components/Wrapper";
import {Footer} from "./layout/footer/Footer";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Hero} from "./layout/sections/hero/Hero";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Contact} from "./layout/sections/contact/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";


function App() {
  return (
     <Wrapper>
       <Particle/>
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
       <GoTopBtn/>
     </Wrapper>
  );
}

export default App;
