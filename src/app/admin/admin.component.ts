import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    surveys: any[]=[]; // Define a property to store the survey data
  
    constructor(private http: HttpClient) {}
  
    ngOnInit() {
      // Make an HTTP request to fetch survey data from your Spring backend
      this.http.get('http://localhost:8080/api/surveys/result').subscribe((data: any) => {
        this.surveys = data;
      });
    }
  }