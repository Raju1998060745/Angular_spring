import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent {
  showAdminLoginForm = false;
  adminLoginForm: FormGroup;
  message: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.adminLoginForm = this.formBuilder.group({
      use: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  navigateToStudentPage() {
    this.router.navigate(['/student']);
  }

  login() {
    const enteredUsername = this.adminLoginForm.get('use')!.value;
    const enteredPassword = this.adminLoginForm.get('pass')!.value;

    this.authService.login(enteredUsername, enteredPassword).subscribe(
      (response: any) => {
        if (response.message === 'successful') {
          // Authentication successful, handle the response and navigate to the admin dashboard
          this.router.navigate(['/admin']);
        } else if (response.message === 'failed') {
          // Authentication failed, handle the error and show an error message
          this.message = 'Authentication failed. Please check your credentials.';
        }
      },
      (error) => {
        // Handle other errors or network issues
        console.error('HTTP error', error);
        this.message = 'An error occurred while trying to authenticate. Please try again later.';
      }
    );
  }
}