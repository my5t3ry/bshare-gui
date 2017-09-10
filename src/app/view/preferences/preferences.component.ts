import {
  Component,
  OnInit
} from '@angular/core';
import { ipcRenderer } from 'electron';

import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { PreferenceActions } from './preferences.actions';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    PreferenceActions
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './preferences.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './preferences.component.html'
})
export class PreferencesComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor(
    private store: Store<AppState>,
    private homeActions: PreferenceActions,
  ) {
    this.store.subscribe(data => console.log(data));
  }

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
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
