import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Survey } from './survey'; 



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {
  surveyForm: FormGroup;
  survey: Survey = new Survey(); // Initialize the survey data model

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.surveyForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      likedMost: ['', Validators.required],
      interestSource: ['', Validators.required],
      recommendLikelihood: ['', Validators.required],
      additionalComments: ['']
    });
  }

  submitSurvey() {
    if (this.surveyForm.valid) {
      const surveyData = this.surveyForm.value;
      this.http.post('http://localhost:8080/api/surveys', surveyData).subscribe(
          (response) => {
            console.log('Survey Data Sent:', response);
            alert('Thank you for submitting the survey!');
            this.router.navigate(['/tk']);
          },
          (error) => {
            console.error('Error sending the request:', error);
          }
        );
  }
  
}
}

