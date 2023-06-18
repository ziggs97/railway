import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router ,private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/tabs/tab1']);
  }

  name = "";
  surname = "";
  country = "";
  city = "";
  telephone = "";
  email = "";
  password = "";

 

  register(): void {
    const user = {
      name: this.name,
      surname: this.surname,
      country: this.country,
      city: this.city,
      telephone: this.telephone,
      email: this.email,
      password: this.password
    };

    this.authService.register(user)
      .then((docId) => {
        // Registration successful
        console.log('Registration successful with document ID:', docId);
        // Perform any additional actions here, such as displaying a success message or navigating to another page
        this.router.navigate(['/tabs/tab1']);
      })
      .catch((error) => {
        // Registration failed
        console.error('Registration failed:', error);
        // Handle the error, such as displaying an error message
      });
  }

}
