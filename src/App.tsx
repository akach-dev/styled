import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Hero} from "./layout/sections/hero/Hero";
import {Wrapper} from "./components/Wrapper";
import {Skills} from "./layout/sections/skills/Skills";

function App() {
  return (
     <Wrapper>
       <Header/>
       <main>
         <Hero/>
         <Skills/>
       </main>

     </Wrapper>

  );
}

export default App;
