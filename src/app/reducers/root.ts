import { routerReducer, RouterState } from '@ngrx/router-store';
import * as fromHome from '../view/preferences/preferences.reducer';

export interface AppState {
  router: RouterState;
  home: fromHome.PreferenceReducer;
}

export const reducers = {
  router: routerReducer,
  home: fromHome.homeReducer
};
