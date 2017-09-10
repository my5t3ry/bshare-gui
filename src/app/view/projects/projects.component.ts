/*
 * Angular 2 decorators and services
 */
import {
  Component, Inject,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import 'rxjs/add/operator/take';
import {shell} from 'electron';
import {DaemonConnectorService} from "../../services/DaemonConnectorService";

/*
 * App Component
 * Top Level Component
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: "projects.html",
  providers: [DaemonConnectorService]
})
export class ProjectsComponent implements OnInit {
  public angularclassLogo = 'assets/img/angular-electron.svg';
  public name = 'Angular Electron Dream Starter';
  public url = 'https://github.com/colinskow/angular-electron-dream-starter';

  constructor(daemonConnectorService: DaemonConnectorService) {
    daemonConnectorService.connect();
  }

  public ngOnInit() {

  }

  public openURL(url) {
    shell.openExternal(url);
  }

}
