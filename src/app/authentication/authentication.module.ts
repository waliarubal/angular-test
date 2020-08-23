import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.componnet';
import { SecurityQuestionComponent } from './security-question/security-question.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { EmailSentComponent } from './email-sent/email-sent.component';

@NgModule({
    imports: [
        LoginComponent,
        ForgotPasswordComponent,
        SecurityQuestionComponent,
        NewPasswordComponent,
        EmailSentComponent
    ],
    declarations: [],
    exports: []
})
export class AuthenticationModule { }