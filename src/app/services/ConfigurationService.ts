import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class ConfigurationService {
  static DAEMON_HOST = "http://localhost:8080/catapult-daemon/"

  constructor() {
  }

}
