
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { route } from './nav-router.moudle';
import { AngularExamplesComponent } from './angular-examples/angular-examples.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularMaterialComponent,
    AngularExamplesComponent,
    FooterComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    route
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
