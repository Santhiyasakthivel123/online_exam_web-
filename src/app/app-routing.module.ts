import { Question10Component } from './question10/question10.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InstructionComponent } from './instruction/instruction.component';
import { QuestionComponent } from './question/question.component';
import { LastComponent } from './last/last.component';
import { RegisterComponent } from './register/register.component';
import { Question2Component } from './question2/question2.component';

const routes: Routes = [
   {
    path:'login',component:LoginComponent
  },
    { path:'instruction',component :InstructionComponent
  },
{ path:'question',component:QuestionComponent},
{path:'last',component:LastComponent},
{path:'',component:RegisterComponent },
{path:'question',component:QuestionComponent},
{path:'question2',component:Question2Component},
{path:'question10',component:Question10Component},
{path:'last',component:LastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
