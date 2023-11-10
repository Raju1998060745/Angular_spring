import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tk',
  templateUrl: './tk.component.html',
  styleUrls: ['./tk.component.css']
})
export class TkComponent {
  constructor(private router: Router) {}
  
  redirectToSurvey() {
    this.router.navigate(['/sur']); // Update this route to match your survey page
  }
}