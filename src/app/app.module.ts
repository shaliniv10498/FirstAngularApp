import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WarningComponent } from './alert-warning/alert-warning.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SuccessComponent } from './success/success.component';
import { UserLoginComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessComponent,
    WarningComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
