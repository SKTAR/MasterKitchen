import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Add Module for Http Request
// import { HttpModule } from '@angular/http';  // Deprecated
import { HttpClientModule } from '@angular/common/http';

import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { AuthGuard } from './shared/guard';
import { CommonModule } from '@angular/common';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // HttpModule, Deprecated
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   // NgbModule, // https://ng-bootstrap.github.io
  //  MDBBootstrapModule.forRoot(),
    LanguageTranslationModule,
  

  //  BrowserAnimationsModule,
  //  AngularFontAwesomeModule
    
    // RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
