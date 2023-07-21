import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Hero} from "./layout/sections/hero/Hero";
import {Wrapper} from "./components/Wrapper";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";

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
     </Wrapper>

  );
}

export default App;
