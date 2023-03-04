import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { AppWordsGame } from './pages/AppWordsGame';

export const Router = () => {
  return (
    <Switch>
      <Route path='/words-game'>
        <AppWordsGame />
      </Route>
      <Route exact path="/">
        <Redirect to="/words-game" />
      </Route>
    </Switch>
  )
}
