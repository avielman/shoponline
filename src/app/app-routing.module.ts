import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';
//import { ProductListComponent } from './components/product-list/product-list.component';
//import { ProductDetailsComponent } from './components/product-details/product-details.component';
//import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
//   { path: '', component: HomeComponent },
//  { path: 'products', component: ProductListComponent },
//  { path: 'products/:id', component: ProductDetailsComponent },
//  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
