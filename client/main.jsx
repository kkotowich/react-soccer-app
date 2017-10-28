import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import App from '../imports/ui/App';
import Example from '../imports/ui/Example';
import Lost from '../imports/ui/Lost';

injectTapEventPlugin();

Meteor.startup( () => {
  render(
    (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/example" component ={Example} />
          <Route exact path="*" component={Lost} />
        </Switch>
      </BrowserRouter>
    )
    , document.getElementById('render-target')
  );
});
