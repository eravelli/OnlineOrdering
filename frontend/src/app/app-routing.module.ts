import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:"",redirectTo:"role-selection",pathMatch:"full"},
{path:"role-selection",component:RoleSelectionComponent},
{path:"search",component:SearchComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
