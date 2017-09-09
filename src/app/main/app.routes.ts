import {Routes} from '@angular/router';
import {NoContentComponent} from '../no-content';

import {PreferencesComponent} from "../preferences/preferences.component";
import {NavComponent} from "./nav.component";
import {ProjectsComponent} from "../projects/projects.component";

export const ROUTES: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'preferences', component: PreferencesComponent},
  {path: '**', component: NoContentComponent},
];
