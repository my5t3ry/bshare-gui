import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {StompService} from 'ng2-stomp-service';





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

    //start connection
    this.stomp.startConnect().then(() => {
      this.stomp.done('init');
      console.log('connected');

      //subscribe
      //subscribe
      this.subscription = this.stomp.subscribe('/socket', this.response);

      //send data
      this.stomp.send('/send/scan-path', JSON.parse('{"path": "test"}'));

      //unsubscribe
      this.subscription.unsubscribe();

      //disconnect
      this.stomp.disconnect().then(() => {
        console.log('Connection closed')
      })

    });
  }
  public response = (data) => {
    console.log(data)
  }
}
