import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyListComponent } from './properties/properties-list.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';

const routes: Routes = [
  {path:'properties', component: PropertyListComponent},
  {path:'properties/:id', component: PropertyDetailsComponent},
  {path:'', redirectTo:'/properties', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }