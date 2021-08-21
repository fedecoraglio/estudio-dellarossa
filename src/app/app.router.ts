import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

export const router: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'quienes-somos', component: AboutComponent},
    { path: 'servicios', component: ServicesComponent},
    { path: 'inicio', component: HomeComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'blog-detail', component: BlogDetailComponent},
    { path: 'contacto', component: ContactComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: false})