import React, { useEffect, useState } from "react";
import axios from "axios";
import Proptypes from "prop-types";
import {Route} from 'react-router-dom'
import "./App.css";

import Home from "./Pages/Home"

const LOGIN_CHECK = true;

const App = () => {
    if (LOGIN_CHECK) {
      return(   
        <div id="App">
          <Home/>
        </div>
      );
  }
}


 export default App;