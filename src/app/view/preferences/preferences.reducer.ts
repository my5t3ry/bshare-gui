import { Action } from '@ngrx/store';

import { PreferenceActions } from './preferences.actions';

export interface PreferenceReducer {
  value?: string;
}

export const initialState: PreferenceReducer = {};

export function homeReducer(state = initialState, action: Action): PreferenceReducer {
  switch (action.type) {

    case PreferenceActions.SET_VALUE: {
      return Object.assign({}, state, {
        value: action.payload
      });
    }

    default: {
      return state;
    }
  }
}
