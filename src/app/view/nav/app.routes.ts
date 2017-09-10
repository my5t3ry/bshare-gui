import {Routes} from '@angular/router';
import {NoContentComponent} from '../no-content';

import {PreferencesComponent} from "../preferences/preferences.component";
import {ProjectsComponent} from "../projects/projects.component";
import {MessagesComponent} from "../messages/messages.component";
import {FriendsComponent} from "../friends/friends.component";

export const ROUTES: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'preferences', component: PreferencesComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'friends', component: FriendsComponent},
  {path: '**', component: NoContentComponent},
];
