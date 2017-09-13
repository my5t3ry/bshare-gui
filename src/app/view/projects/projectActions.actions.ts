import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

@Injectable()

export class ProjectActions {

  public static PROJECTS_SCANNED = 'PROJECTS_SCANNED';
  public projectsScanned(value: string): Action {
    return {
      type: ProjectActions.PROJECTS_SCANNED,
      payload: value
    };
  }
}
