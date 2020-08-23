import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailSentComponent } from './email-sent/email-sent.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.componnet';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { SecurityQuestionComponent } from './security-question/security-question.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: `forgotPassword`,
        component: ForgotPasswordComponent
    },
    {
        path: 'securityQuestion',
        component: SecurityQuestionComponent
    },
    {
        path: 'newPassword',
        component: NewPasswordComponent
    },
    {
        path: 'emailSent',
        component: EmailSentComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }