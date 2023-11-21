import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sur',
  templateUrl: './sur.component.html',
  styleUrls: ['./sur.component.css'],
  providers: [DatePipe]
})
export class SurComponent implements OnInit {
  surveys: any[] = []; // Define a property to store the survey data
  
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  ngOnInit() {
    // Make an HTTP request to fetch survey data from your Spring backend
    this.http.get('http://localhost:8080/api/surveys/result').subscribe((data: any) => {
      this.surveys = data;
    });
  }

  formatSurveyDate(date: string): string {
    // Use DatePipe to format the date
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
}
