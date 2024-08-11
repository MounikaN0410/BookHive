import logo from './logo.svg';
import './App.css';
import "./styles/styles.css";
import React, { useState,useContext } from "react";
import ViewPortProvider from './components/helper/ViewPortProvider';
import MainProvider from './views/MainProvider';
import Main from './views/Main';


function App() {
  return (
    <div>
        <ViewPortProvider>
          <MainProvider>
            <Main></Main>
            </MainProvider>
        </ViewPortProvider>
    </div>
  );
}

export default App;
