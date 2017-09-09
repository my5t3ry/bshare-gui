import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {
  ApplicationRef,
} from '@angular/core';

import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {Store} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './nav/app.routes';
import {rootReducer} from './reducers';
import {ProjectsComponent} from './projects/projects.component';
import {APP_BASE_HREF} from '@angular/common';
import {APP_RESOLVER_PROVIDERS} from './projects/projects.resolver';
import {AppState} from './reducers';
import {NoContentComponent} from './no-content';
import '../styles/styles.scss';
import '../styles/headings.css';
import {PreferencesComponent} from "./preferences/preferences.component";
import {NavComponent} from "./nav/nav.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MDBBootstrapModule } from '../../node_modules/angular-bootstrap-md/src/app/typescripts/free/';
import {MessagesComponent} from "./messages/messages.component";
import {ShareComponent} from "./share/share.component";

declare const ENV: string;
declare var $: any;

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  {provide: APP_BASE_HREF, useValue: '/'}
];

interface InternalStateType {
  [key: string]: any;
}

interface StoreType {
  state: InternalStateType;
  rootState: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

let CONDITIONAL_IMPORTS = [];

if (ENV === 'development') {
  console.log('loading react devtools');
  CONDITIONAL_IMPORTS.push(StoreDevtoolsModule.instrumentOnlyWithExtension());
}

/**
 * `ProjectsModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [NavComponent],
  declarations: [
    ProjectsComponent,
    MessagesComponent,
    PreferencesComponent,
    NoContentComponent,
    ShareComponent,
    NavComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    StoreModule.provideStore(rootReducer),
    RouterStoreModule.connectRouter(),
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    ...CONDITIONAL_IMPORTS
  ],
  exports: [],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule {

  constructor(public appRef: ApplicationRef,
              private _store: Store<AppState>) {
  }


}
