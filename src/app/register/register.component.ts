import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({  selector: 'app-register',  
templateUrl: './register.component.html',  
styleUrls: ['./register.component.css']})
export class RegisterComponent {  
    registerForm: any;  
    constructor(private fb:FormBuilder,private service:RegisterService,private route:Router){     
        this.registerForm = this.fb.group({    
            name: ['', Validators.required],   
             number: ['', Validators.required],   
              email: ['', Validators.required],    
              password: ['', Validators.required],    
              experience: ['', Validators.required],    
              linkedprofile: ['', Validators.required],    
              role: ['', Validators.required],   
               period: ['', Validators.required],    
               skill: ['', Validators.required],    
               organitaion: ['', Validators.required],      
            })    }    
            proceed() {      
                if(this.registerForm.valid){        
                this.fb=this.registerForm.value        
                this.service.postMethod(this.registerForm.value).subscribe();        
                this.registerForm.reset();                
            }     }     
            login(){           
                this.route.navigateByUrl('/login')               
            }       
        }