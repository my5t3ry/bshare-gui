import {Routes} from '@angular/router';
import {NoContentComponent} from '../no-content';

import {PreferencesComponent} from "../preferences/preferences.component";
import {NavComponent} from "./nav.component";

export const ROUTES: Routes = [
  {path: '', component: NavComponent},
  {path: 'preferences', component: PreferencesComponent},
  {path: '**', component: NoContentComponent},
];
