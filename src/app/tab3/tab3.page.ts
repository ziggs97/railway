import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userEmail="";
  warnings: any[] = [];

  constructor(private router:Router, private authService: AuthService, private firestore: Firestore) {}

  ngOnInit() {
    this.getUserEmail();
    this.getWarnings();
  }

  newWarning(){
    this.router.navigate(['warning']);
  }

  async getUserEmail() {
    try {
      this.userEmail = await this.authService.getCurrentUserEmail() || 'Pokemon Guest';
    } catch (error) {
      console.error('Error retrieving user email:', error);
      this.userEmail = 'Pokemon Guest';
    }
  }

  async getWarnings() {
    const warningsCollection = collection(this.firestore, 'warnings');
    const snapshot = await getDocs(warningsCollection);
    this.warnings = snapshot.docs.map(doc => doc.data());
  }

}
