import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created!';
  serverName = 'Testserver';

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was Created!!';
  }
/*   onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  } */
  onUpdateServerName(event: Event) {
  // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  // this.serverName = (<HTMLInputElement>event.target).value;
  }
}
