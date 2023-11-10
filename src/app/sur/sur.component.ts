import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sur',
  templateUrl: './sur.component.html',
  styleUrls: ['./sur.component.css']
})
export class SurComponent implements OnInit {
  surveys: any[]=[]; // Define a property to store the survey data
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Make an HTTP request to fetch survey data from your Spring backend
    this.http.get('http://localhost:8080/api/surveys/result').subscribe((data: any) => {
      this.surveys = data;
    });
  }
}