import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ErrorComponent } from './pages/error/error.component';



export const routes: Routes = [
    {path : '', component : HomeComponent},


    {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },

    {path: 'cart', component : CartComponent},
    {path: 'admin', component : AdminComponent },
    {path: '**', component: ErrorComponent } 
];
