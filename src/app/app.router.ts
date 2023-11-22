import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const router: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'quienes-somos', component: HomeComponent},
    { path: 'servicios', component: HomeComponent},
    { path: 'inicio', component: HomeComponent},
    { path: 'blog', component: HomeComponent},
    { path: 'blog-detail', component: HomeComponent},
    { path: 'contacto', component: HomeComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: false})
