import {
  Component,
  OnInit
} from '@angular/core';
import { ipcRenderer } from 'electron';

import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { PreferenceActions } from './preferences.actions';

@Component({
  selector: 'home',
  providers: [
    PreferenceActions
  ],
  styleUrls: [ './preferences.component.css' ],
  templateUrl: './preferences.component.html'
})
export class PreferencesComponent implements OnInit {
  public localState = { value: '' };

  constructor(
    private store: Store<AppState>,
    private homeActions: PreferenceActions,
  ) {
    this.store.subscribe(data => console.log(data));
  }

  public ngOnInit() {
    console.log('hello `Home` component');
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.store.dispatch(this.homeActions.setValue(value));
    this.localState.value = '';
  }

  public showDialog() {
    ipcRenderer.send('show-dialog');
  }
}
