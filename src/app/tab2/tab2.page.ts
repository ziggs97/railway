import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';

import { GoogleMap } from '@capacitor/google-maps';
import { Plugins } from '@capacitor/core';

const { GoogleMaps } = Plugins;
declare var google: any;


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  userEmail="";

  map: any;
  

  constructor(private router: Router, private authService: AuthService, private geolocation: Geolocation) {}

  ngOnInit() {
    this.getUserEmail();
    this.getCurrentLocation();
    // this.loadMap();
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

  // async loadMap() {
  //   const mapOptions = {
  //     center: new google.maps.LatLng(37.7749, -122.4194), // Initial map center coordinates
  //     zoom: 12 // Initial zoom level
  //   };

  //   this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  // }
  
  

}
