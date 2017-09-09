import {Routes} from '@angular/router';
import {NoContentComponent} from '../no-content';

import {ProjectsComponent} from "./projects.component";
import {PreferencesComponent} from "../preferences/preferences.component";

export const ROUTES: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'preferences', component: PreferencesComponent},
  {path: '**', component: NoContentComponent},
];
