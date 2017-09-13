import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AppState} from "../reducers/root";
import {Store} from "@ngrx/store";
import {ProjectActions} from "../view/projects/projectActions.actions";



@Injectable()
export class MessageProcessorService {
  private store: Store<AppState>;
  private projectActions: ProjectActions;

  constructor(store: Store<AppState>, projectActions : ProjectActions) {
    this.projectActions = this.projectActions = projectActions;
    this.store = store;
  }

  processMessage(data): void {
    return this.store.dispatch(this.projectActions.projectsScanned("succsessfull!"))
  }


}
