import {routerReducer, RouterState} from '@ngrx/router-store';
import * as fromHome from '../view/preferences/preferences.reducer';
import * as lastAction from '../reducers/lastAction.reducer';

export interface AppState {
  router: RouterState;
  home: fromHome.PreferenceReducer;
  lastAction: any;
}

export const reducers = {
  router: routerReducer,
  preferences: fromHome.preferenceReducer,
  lastAction: lastAction.lastActionReducer
};
