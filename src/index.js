import React from 'react';
import { render } from 'react-dom'
import { browserHistory } from 'react-router'

import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath'
import routes from './utils/routes'

ReactStormpath.init();

render(<Router routes={routes} history={browserHistory}/>,
  document.getElementById('root'));