import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ResourcesComponent} from './components/resources/resources.component';
import {SecurityComponent} from './components/security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    ResourcesComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
