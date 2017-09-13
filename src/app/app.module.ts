import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { StompService } from 'ng2-stomp-service';


import {
  ApplicationRef, NgModule,
} from '@angular/core';

import {
  RouterModule,
  PreloadAllModules  ,

} from '@angular/router';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {Store} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './view/nav/app.routes';
import {rootReducer} from './reducers';
import {ProjectsComponent} from './view/projects/projects.component';
import {APP_BASE_HREF} from '@angular/common';
import {APP_RESOLVER_PROVIDERS} from './view/projects/projects.resolver';
import {AppState} from './reducers';
import {NoContentComponent} from './view/no-content';
import '../styles/styles.scss';
import '../styles/headings.css';
import {PreferencesComponent} from "./view/preferences/preferences.component";
import {NavComponent} from "./view/nav/nav.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessagesComponent} from "./view/messages/messages.component";
import {FriendsComponent} from "./view/friends/friends.component";
import {DaemonConnectorModule} from "./services/DaemonConnectorModule";
import {MessageProcessorModule} from "./services/MessageProcessorModule";
import {ProjectActions} from "./view/projects/projectActions.actions";
import {MessageProcessorService} from "./services/MessageProcessorService";
import {DaemonConnectorService} from "./services/DaemonConnectorService";



declare const ENV: string;

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
    FriendsComponent,
    NavComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
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
    StompService,
    DaemonConnectorService,
    MessageProcessorService,
    ProjectActions,
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef,
              private _store: Store<AppState>) {
  }
}
