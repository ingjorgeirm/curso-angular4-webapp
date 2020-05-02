import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductoListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';


const appRoutes: Routes = [
{ path : '', component: HomeComponent },
{ path : 'home', component: HomeComponent},
{ path : 'productos', component: ProductoListComponent},
{ path : 'crear-producto', component: ProductoAddComponent},
{ path : '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);