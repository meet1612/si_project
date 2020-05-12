import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { TestService } from './test.service';
import { routing } from './app.routing';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { SettingContactComponent } from './setting-contact/setting-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    PagenotfoundComponent,
    SettingProfileComponent,
    SettingContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule,
    HttpClientModule,
    routing
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
