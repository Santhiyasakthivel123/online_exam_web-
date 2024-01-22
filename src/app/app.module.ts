import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionComponent } from './instruction/instruction.component';
import { QuestionComponent } from './question/question.component';
import { Question2Component } from './question2/question2.component';
import { Question10Component } from './question10/question10.component';
import { LastComponent } from './last/last.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({  declarations: [    
    AppComponent,    
    InstructionComponent,    
    QuestionComponent,    
    Question2Component,    Question10Component,    LastComponent,    LoginComponent,    RegisterComponent  ],  
    imports: [    
        BrowserModule,    
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,    
        HttpClientModule  ],  
    providers: [],  
    bootstrap: [AppComponent]})
    export class AppModule { }