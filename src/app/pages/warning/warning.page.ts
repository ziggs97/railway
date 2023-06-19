import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.page.html',
  styleUrls: ['./warning.page.scss'],
})
export class WarningPage implements OnInit {

  title="";
  country="";
  neighborhood="";
  address="";
  city="";
  validRamp = false;

  constructor(private router:Router, private firestore: Firestore) { }
  

  ngOnInit() {
  }

  async addWarning() {
    try {
      const warning = {
        title: this.title,
        country: this.country,
        neighborhood: this.neighborhood,
        address: this.address,
        city: this.city,
        validRamp: this.validRamp
      };

      const warningsCollection = collection(this.firestore, 'warnings');
      await addDoc(warningsCollection, warning);
      console.log('Warning added successfully!');
      
      // Reset the form fields after adding the warning
      this.title = '';
      this.country = '';
      this.neighborhood = '';
      this.address = '';
      this.city = '';
      this.validRamp = false;
    } catch (error) {
      console.error('Error adding warning:', error);
      // Handle the error, such as displaying an error message
    }
  }

  // addWarning(){
  //   this.router.navigate(['tabs/tab3'])
  // }

}
