import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import React from "react";
import {Works} from "./layout/sections/works/Works";
import {About} from "./layout/sections/about/About";
import {Contact} from "./layout/sections/contacts/Contacts";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <About/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

