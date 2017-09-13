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
import {AppState} from "../../reducers/root";
import {Store} from "@ngrx/store";
import {ProjectActions} from "./projectActions.actions";

/*
 * App Component
 * Top Level Component
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: "projects.html",
  providers: [DaemonConnectorService, ProjectActions]
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {
  }

  public name = 'Angular Electron Dream Starter';
  public url = 'https://github.com/colinskow/angular-electron-dream-starter';
  private daemonConnectService: any;

  constructor(private store: Store<AppState>, daemonConnectorService: DaemonConnectorService) {
    this.daemonConnectService = daemonConnectorService.connect();
    this.store.subscribe(data => console.log(data));
  }

  public openURL(url) {
    shell.openExternal(url);
  }

}
