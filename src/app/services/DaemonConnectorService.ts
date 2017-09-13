import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {StompService} from 'ng2-stomp-service';
import {MessageProcessorService} from "./MessageProcessorService";
import {ConfigurationService} from "./ConfigurationService";

const {ipcRenderer} = require('electron');


@Injectable()
export class DaemonConnectorService {
  private stomp: StompService;
  private subscription: any;
  private messageProcessorService: any;

  constructor(stomp: StompService, messageProcessorService: MessageProcessorService) {
    this.messageProcessorService = messageProcessorService;
    this.stomp = stomp;
  }

  connect() {

    this.stomp.configure({
      host: ConfigurationService.DAEMON_HOST + 'catapult-daemon/connector',
      debug: true,
      queue: {'init': false}
    });

    this.stomp.startConnect().then(() => {
      this.stomp.done('init');
      console.log('connected');

      this.subscription = this.stomp.subscribe('/socket', (data) => {
        this.messageProcessorService.processMessage(data);
      });
      this.stomp.send('/send/scan-path', JSON.parse('{"path": "/Users/sascha.bast/miko/lab"}'));
    });
  }

  public response = (data) => {
  }
}
