import { Component } from '@angular/core';
import { ClogService } from '@nivite/nlib';

@Component({
  selector: 'nivite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fireconf: any; // provide the firebase config in assets/fireconfig.json or in index.html here directly
  guest: any;
  invite: any;
  constructor(private clog: ClogService) { }
  loadInviteData(invite: any) {
    this.invite = invite;
    this.clog.log('invite: ' + (invite ? invite.hostName : invite));
  }
  loadUserData(user: any) {
    this.clog.log('user: ' + (user ? user.email : user));
  }
  loadGuestData(guest: any) {
    this.guest = guest;
    this.clog.log('guest: ' + (guest ? guest.email : guest));
  }
}
