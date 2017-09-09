/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { shell } from 'electron';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './projects.component.css'
  ],
  templateUrl : "projects.html"
})
export class ProjectsComponent implements OnInit {
  public angularclassLogo = 'assets/img/angular-electron.svg';
  public name = 'Angular Electron Dream Starter';
  public url = 'https://github.com/colinskow/angular-electron-dream-starter';

  constructor( ){}

  public ngOnInit() {

  }

  public openURL(url) {
    shell.openExternal(url);
  }

}
