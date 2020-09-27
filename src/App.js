import React from 'react';
import {  Route , Switch } from 'react-router-dom';
// import { Route , Switch} from 'react-router';
import TodoList from './components/TodoList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import './List.css';

import Create from './components/Create';
import Edit from './components/Edit';
import NavBar from './navbar';

function App() {
  return (
    <div >
      <AppBar color="primary" position="static">
      <Toolbar>
      <TypoGraphy variant="subtitle1" color="inherit">
              Bart todo
      </TypoGraphy>
          <NavBar />
          </Toolbar>
        </AppBar>
      
       <main>
         <Switch>
         <Route exact path='/' component={TodoList}/>
         <Route path='/add' component={Create} />
         <Route path='/edit/:id' component={Edit} />
         </Switch>
       </main>
    </div>
  );
}

export default App;
