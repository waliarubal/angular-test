import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.componnet';
import { SecurityQuestionComponent } from './security-question/security-question.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
    imports: [
        LoginComponent,
        ForgotPasswordComponent,
        SecurityQuestionComponent,
        NewPasswordComponent,
        EmailSentComponent
    ],
    declarations: [
        CommonModule,
        AuthenticationRoutingModule
    ]
})
export class AuthenticationModule { }