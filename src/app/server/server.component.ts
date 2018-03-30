
import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
      .onlineCSS {
        color: white;
      }
  `]

})
export class ServerComponent {

  serverId = 100;
  serverStatus = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'On-line' : 'OFF-line';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'On-line' ? 'green' : 'red';
  }
}
