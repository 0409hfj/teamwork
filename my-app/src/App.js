import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Login from "./views/login"
import Toupiao from './views/toupiao';
import Wode from './views/wode';
import Faqi from './views/faqi';
import Detail from './views/detail';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/toupiao" component={Toupiao}></Route>
              <Route path="/wode" component={Wode}></Route>
              <Route path="/faqi" component={Faqi}></Route>
              <Route path="/detail" component={Detail}></Route>
          </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
