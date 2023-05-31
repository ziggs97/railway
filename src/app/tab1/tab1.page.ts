import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  email= '';
  password='';

  constructor(private router:Router, private authService: AuthService,private toastController: ToastController) {}

  ngOnit(){}

  async login(): Promise<void> {
    try {
      await this.authService.login(this.email, this.password);
      // Login successful
      this.router.navigate(['/tabs/tab2']); // Navigate to Tab2
    } catch (error) {
      // Handle login error
      const toast = await this.toastController.create({
        message: 'Invalid login data.',
        duration: 3000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();
    }
  }

  // login(){
  //   this.router.navigate(['/tabs/tab2']);
  // }

  register(){
    this.router.navigate(['register']);
  }

}
