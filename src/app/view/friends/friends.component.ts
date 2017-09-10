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
  encapsulation: ViewEncapsulation.None,
  templateUrl: "friends.html"
})
export class FriendsComponent implements OnInit {

  constructor() {
  }

  public ngOnInit() {

  }

  public openURL(url) {
    shell.openExternal(url);
  }

}
