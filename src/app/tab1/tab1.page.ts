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

  login(): void {
    this.authService.login(this.email, this.password)
      .then(() => {
        // Login successful
        // Do something, such as navigating to another page
        this.router.navigate(['/tabs/tab2']);
      })
      .catch((error) => {
        // Login failed
        console.error('Login failed:', error);
        // Handle the error, such as displaying an error message
      });
  }

  async resetPassword(): Promise<void> {
    try {
      const userExists = await this.authService.checkUserExists(this.email);
      if (userExists) {
        await this.authService.resetPassword(this.email);
        // Password reset email sent successfully
        // Do something, such as displaying a success message
        this.presentToast('Password reset email sent successfully');
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('Password reset email sending failed:', error);
      // Handle the error, such as displaying an error message
      this.presentToast('Failed to send password reset email');
    }
  }

  private async presentToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  // login(){
  //   this.router.navigate(['/tabs/tab2']);
  // }

  register(){
    this.router.navigate(['register']);
  }

}
