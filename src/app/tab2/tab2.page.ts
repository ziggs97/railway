import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  userEmail="";

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getUserEmail();
  }

  async getUserEmail() {
    try {
      this.userEmail = await this.authService.getCurrentUserEmail() || 'Pokemon Guest';
    } catch (error) {
      console.error('Error retrieving user email:', error);
      this.userEmail = 'Pokemon Guest';
    }
  }

  // Call number android/ios
  // constructor(private callNumber: CallNumber) { }

  // callPhoneNumber(phoneNumber: string) {
  //   this.callNumber.callNumber("18001010101", true)
  //   .then(res => console.log('Launched dialer!', res))
  //   .catch(err => console.log('Error launching dialer', err));
  // }

}
