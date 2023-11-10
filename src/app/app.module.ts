import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { TkComponent } from './tk/tk.component';
import { SurComponent } from './sur/sur.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StudentComponent,
    AdminComponent,
    TkComponent,
    SurComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'main', component: MainComponent },
      {path: 'student', component: StudentComponent },
      {path: 'admin', component: AdminComponent},
      {path:'tk', component:TkComponent},
      {path:'sur', component:SurComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
