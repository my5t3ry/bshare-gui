import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

@Injectable()

export class PreferenceActions {

  public static SET_VALUE = '[Home] Set Value';
  public setValue(value: string): Action {
    return {
      type: PreferenceActions.SET_VALUE,
      payload: value
    };
  }
}
