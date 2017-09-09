import { Routes } from '@angular/router';
import { NoContentComponent } from '../no-content';

import { DataResolver } from './projects.resolver';
import {ProjectsComponent} from "./projects.component";

export const ROUTES: Routes = [
  { path: '',      component: ProjectsComponent },
  { path: '**',    component: NoContentComponent },
];
