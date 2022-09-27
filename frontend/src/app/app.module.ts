import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { SubjectService } from './services/subject.service';
import { HindiComponent } from './hindi/hindi.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { baseUrl } from './shared/baseurl';
import { UserService } from './services/user.service';
import { UregComponent } from './ureg/ureg.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HindiComponent,
    SidenavListComponent,
    UregComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ],
  exports:[
    MatSidenavModule
  ],
  providers: [
    SubjectService, UserService,
    {provide:'BaseURL',useValue:baseUrl} 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
 }
