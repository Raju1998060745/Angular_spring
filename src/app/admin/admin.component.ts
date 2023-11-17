import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    surveys: any[]=[]; // Define a property to store the survey data
    showUpdateForm = false;
    updatedSurvey: any = {};
  
    constructor(private http: HttpClient) {}
  
    ngOnInit() {
      // Make an HTTP request to fetch survey data from your Spring backend
      this.http.get('http://localhost:8080/api/surveys/result').subscribe((data: any) => {
        this.surveys = data;
      });
    }

    openUpdateForm(survey: any) {
      // Set the survey to be updated
      this.updatedSurvey = { ...survey };
      // Show the update form
      this.showUpdateForm = true;
  }

  submitUpdateForm() {
      // Make an HTTP request to update the survey on the backend
      this.http.put(`http://localhost:8080/api/surveys/${this.updatedSurvey.id}`, this.updatedSurvey)
    .subscribe(
        (data: any) => {
            console.log('Survey updated successfully', data);
            this.showUpdateForm = false;
        },
        (error) => {
            console.error('Error updating survey', error);
        }
    );
  }


// Method to delete a survey
deleteSurvey(surveyId: number) {
  // Make an HTTP request to delete the survey on the backend
  this.http.delete(`http://localhost:8080/api/surveys/${surveyId}`).subscribe(() => {
      // Remove the deleted survey from the local array
      this.surveys = this.surveys.filter((survey) => survey.id !== surveyId);
      console.log('Survey deleted successfully');
  });
}
}