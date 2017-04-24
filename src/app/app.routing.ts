/**
 * Created by felix on 4/24/17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes

import { HomeComponent } from './home/home.component';

const appRoutes: Routes  =  [
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
