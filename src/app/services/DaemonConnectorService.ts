import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {StompService} from 'ng2-stomp-service';

const {ipcRenderer} = require('electron');


@Injectable()
export class DaemonConnectorService {
  private stomp: StompService;
  private subscription: any;


  constructor(stomp: StompService) {
    this.stomp = stomp;
  }

  connect() {


    //configuration
    this.stomp.configure({
      host: 'http://localhost:8080/catapult-daemon/connector',
      debug: true,
      queue: {'init': false}
    });

    this.stomp.startConnect().then(() => {
      this.stomp.done('init');
      console.log('connected');

      this.subscription = this.stomp.subscribe('/socket', function (data) {
        ipcRenderer.send('show-dialog', data);
      });

      this.stomp.send('/send/scan-path', JSON.parse('{"path": "/Users/sascha.bast/miko/lab"}'));

    });
  }

  public response = (data) => {
    console.log(data)
  }
}
