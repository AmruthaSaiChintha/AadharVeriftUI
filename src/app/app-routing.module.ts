import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { DetailsComponent } from './details/details.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { UpdateComponent } from './update/update.component';
import { ImageComponent } from './image/image.component';
import { UsersComponent } from './users/users.component';
import { CreateupdateComponent } from './createupdate/createupdate.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AllusersComponent } from './allusers/allusers.component';
import { LeftComponent } from './left/left.component';

const routes: Routes = [
  {path:"",component:LandingpageComponent},
{path:"emailpage",component:EmailpageComponent},  
{path:"viewpage/:email",component:ViewpageComponent},
{path:"details",component:DetailsComponent},
{path:"update/:id", component:UpdateComponent},
{path:"image",component:ImageComponent},
{path:"users",component:UsersComponent},
{path:"createupdate",component:CreateupdateComponent},
{path:"contactus",component:ContactusComponent},
{path:"allusers",component:AllusersComponent},
{path:"left",component:LeftComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
