import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators and FormBuilder

@Component({
  selector: 'app-emailpage',
  templateUrl: './emailpage.component.html',
  styleUrls: ['./emailpage.component.css']
})
export class EmailpageComponent {

  // Use FormGroup and FormBuilder to manage the form
  emailForm: FormGroup;

  constructor(private router: Router,
    private emailverify: UserService,
    private formBuilder: FormBuilder) {
    
    // Initialize the form with validations
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]] // Add required and email validators
    });
  }

  navigate() {
    if (this.emailForm.valid) { // Only proceed if the form is valid
      const email = this.emailForm.value.email;
      console.log(email);

      this.emailverify.verify(this.emailForm.value).subscribe(
        (Response) => {
          console.log(this.emailForm.value);
          this.router.navigate(['viewpage', email]);
        },
        (error) => {
          this.router.navigate(['details']);
        }
      );
    }
  }
  navigate3()
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
}
