import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  userEmail="";

  constructor(private router: Router, private authService: AuthService, private geolocation: Geolocation) {}

  ngOnInit() {
    this.getUserEmail();
    this.getCurrentLocation();
  }

  async getUserEmail() {
    try {
      this.userEmail = await this.authService.getCurrentUserEmail() || 'Pokemon Guest';
    } catch (error) {
      console.error('Error retrieving user email:', error);
      this.userEmail = 'Pokemon Guest';
    }
  }

  async logout() {
    try {
      await this.authService.logout();
      console.log('User logged out successfully');
      this.router.navigate(['/tabs/tab1']); // Navigate to the login page or any other desired page after logout
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle the error, such as displaying an error message
    }
  }

  // Call number android/ios
  // constructor(private callNumber: CallNumber) { }

  // callPhoneNumber(phoneNumber: string) {
  //   this.callNumber.callNumber("18001010101", true)
  //   .then(res => console.log('Launched dialer!', res))
  //   .catch(err => console.log('Error launching dialer', err));
  // }

  getCurrentLocation() {
    Geolocation.getCurrentPosition()
      .then((position: GeolocationPosition) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
      })
      .catch((error) => {
        console.error('Error getting current location:', error);
      });
  }

}
