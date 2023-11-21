import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';




@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})



export class StudentComponent {
  student_interest_error:boolean =false 
   recommendLikelihood=["Very Likely","Likely","Unlikely"]
  
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router,) {}
  // Survey form with form controls and validators
    surveyform=new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      streetAddress:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      zip:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{5}')]),
      email:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
      phoneNumber:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{10}$/)]),
      interestSource:new FormControl('',[Validators.required]),
      recommendLikelihood:new FormControl('',[Validators.required]),
      DOS:new FormControl(null,[Validators.required]),
      additionalComments:new FormControl('',[Validators.required]),
    })
    
// Object to store student interests checkboxes
  student_interests:any={
    Students:false,
    location:false,
    campus:false,
    atmosphere:false,
    dormrooms:false,
    sports:false,
  }
  checkbox_:any
  
  ngOnInit(): void {
    
  }

  // Method to handle form submission

  

  submitSurvey() {
    if (
      this.student_interests.Students == false &&
      this.student_interests.location == false &&
      this.student_interests.campus == false &&
      this.student_interests.atmosphere == false &&
      this.student_interests.dormrooms == false &&
      this.student_interests.sports == false
    ) {
      this.student_interest_error = true;
      console.log("No interests selected");
    } else {
      if (this.surveyform.valid) {
        let checkarr = [];
        for (let key in this.student_interests) {
          if (this.student_interests[key]) {
            checkarr.push(key);
          }
        }
        this.checkbox_ = checkarr.join(",");
        console.log("charrarr", this.checkbox_)
        

        let payload={
          firstName:this.surveyform.value.firstName,
          lastName:this.surveyform.value.lastName,
          streetAddress:this.surveyform.value.streetAddress,
          city:this.surveyform.value.city,
          state:this.surveyform.value.state,
          zip:this.surveyform.value.zip,
          email:this.surveyform.value.email,
          phoneNumber:this.surveyform.value.phoneNumber,
          likedMost:this.checkbox_,
          interestSource:this.surveyform.value.interestSource,
          recommendLikelihood:this.surveyform.value.recommendLikelihood,
          dos:this.surveyform.value.DOS,
          additionalComments: this.surveyform.value.additionalComments
        }

        console.log(payload)
  
    
  
        this.http.post('http://localhost:8080/api/surveys', payload).subscribe(
          (response) => {
            console.log('Survey Data Sent:', response);
            this.router.navigate(['/tk']);
          },
          (error) => {
            console.error('Error sending the request:', error);
          }
        );
      } else {
        console.error('Survey form is not valid');
      }
    }
  }
  
  cancel(){
    this.surveyform.reset()
    this.student_interests={
      Students:false,
      location:false,
      campus:false,
      atmosphere:false,
      dormrooms:false,
      sports:false,
    }
  }
  
  
  
}



