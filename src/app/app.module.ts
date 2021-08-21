import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { EmailService } from './shared/email.service'
import { ServicesService } from './shared/services.service';
import { NavbarComponent } from './navbar/navbar.component';
import {ServiceListComponent} from './service-list/service-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    FooterComponent,
    BlogComponent,
    ContactComponent,
    NavbarComponent,
    ServiceListComponent,
    BlogDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [EmailService, ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
