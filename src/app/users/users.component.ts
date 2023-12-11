import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user: string = '';
  pass: string = '';
  IsLoggedIn: boolean = false;
  showError: boolean = false; // Added showError property

  constructor(private router:Router) {}

  Admin(): void {
    if (this.user === 'admin@gmail.com' && this.pass === 'password') {
      
      window.location.href = "/allusers";
      // ...
    } else {
      // Invalid login
      this.showError = true; // Show the error message
    }
    // Clear form fields
    this.user = '';
    this.pass = '';
  }
  navigate()
    {
      this.router.navigateByUrl("emailpage")
    }
    navigate1()
    {
      this.router.navigateByUrl("contactus")
    }
    navigate2()
    {
      this.router.navigateByUrl("users")
    }
  Logout(): void {
    localStorage.removeItem("User");
    location.href = "/Admin";
  }
}
