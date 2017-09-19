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
import {Http, Response} from "@angular/http";
import {ConfigurationService} from "../../services/ConfigurationService";

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
  public localState = {abletonProjects: []};

  ngOnInit(): void {
  }

  public name = 'Angular Electron Dream Starter';
  public url = 'https://github.com/colinskow/angular-electron-dream-starter';

  constructor(private store: Store<AppState>,private http: Http, daemonConnectService: DaemonConnectorService) {
    daemonConnectService.connect();
    this.store.subscribe(data => this.processEvents(data));
  }

  private processEvents(data) {
    switch (data.lastAction.type) {
      case "PROJECTS_SCANNED" :
        this.refreshProjects();
    }
  }

  public openURL(url) {
    shell.openExternal(url);
  }


  private refreshProjects() {
    this.http.get(ConfigurationService.DAEMON_HOST + "project/").map((res: Response) =>
      console.log(res.json())
    );
  }

}
