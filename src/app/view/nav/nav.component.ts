/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import 'rxjs/add/operator/take';
import {shell} from 'electron';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: "app",
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'nav.component.css'
  ],
  templateUrl: "nav.html"
})
export class NavComponent implements OnInit {
  public name = 'Angular Electron Dream Starter';

  constructor() {
  }

  public ngOnInit() {

  }

  public openURL(url) {
    shell.openExternal(url);
  }

}
