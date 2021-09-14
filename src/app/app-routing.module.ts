import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductaddComponent } from './Product/productadd/productadd.component';

const routes: Routes = [
  {path:'/add',component:ProductaddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
