import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  ApplicationRef,
  NgModule,
} from '@angular/core';

import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import {
  MaterialModule,
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule, MdMenu,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {Store} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './nav/app.routes';
import {rootReducer} from './reducers';
// App is our top level component
import {ProjectsComponent} from './projects/projects.component';
import {APP_BASE_HREF} from '@angular/common';
import {APP_RESOLVER_PROVIDERS} from './projects/projects.resolver';
import {AppState} from './reducers';
import {NoContentComponent} from './no-content';

import '../styles/styles.scss';
import '../styles/headings.css';
import {PreferencesComponent} from "./preferences/preferences.component";
import {CdkTableModule} from "@angular/cdk/table";
import {NavComponent} from "./nav/nav.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

declare const ENV: string;

// Application wide providers
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
    PreferencesComponent,
    NoContentComponent,
    NavComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    HttpModule,
    StoreModule.provideStore(rootReducer),
    RouterStoreModule.connectRouter(),
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    ...CONDITIONAL_IMPORTS
  ],
  exports: [
    BrowserModule,
    CdkTableModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,

  ],

  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(public appRef: ApplicationRef,
              private _store: Store<AppState>) {
  }


}
