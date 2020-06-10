import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import InitialPage from './pages/InitialPage';
import Note from './pages/Note';

const Routes = () =>{
  return (
    <BrowserRouter>
      <Route path='/' exact component={InitialPage} />
      <Route path='/main' component={MainPage} />
      <Route path='/note' component={Note} />
    </BrowserRouter>
  )
}

export default Routes;