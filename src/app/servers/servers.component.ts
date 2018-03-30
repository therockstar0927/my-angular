import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer =  true;
  serverCreationStatus = 'No Server was created !!';
  serverName = '?';
  serverCreated = false;
  servers = ['TestServer', 'TestServer-2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  // onUpdateServerName (event: any) {
  //   this.serverName = (<HTMLInputElement> event.target).value;
  // }
}
