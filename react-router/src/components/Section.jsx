import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import RouterContainer from './RouterContainer';
import LinkContainer from './LinkContainer';
import SwitchContainer from './SwitchContainer';
import RouteContainer from './RouteContainer';

const Section = () => {
  return (
    <section className='hero is-dark is-fullheight'>
      <Switch>
        <Route exact path='/' component={HomeContainer}/>
        <Route path='/router' component={RouterContainer}/>
        <Route path='/link' component={LinkContainer}/>
        <Route path='/switch' component={SwitchContainer}/>
        <Route path='/route' component={RouteContainer}/>
      </Switch>
    </section>
  );
};

export default Section;
