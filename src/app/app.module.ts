import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { ImageComponent } from './image/image.component';
import { UsersComponent } from './users/users.component';
import { CreateupdateComponent } from './createupdate/createupdate.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AllusersComponent } from './allusers/allusers.component';
import { LeftComponent } from './left/left.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    EmailpageComponent,
    DetailsComponent,
    ViewpageComponent,
    UpdateComponent,
    ImageComponent,
    UsersComponent,
    CreateupdateComponent,
    ContactusComponent,
    AllusersComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
