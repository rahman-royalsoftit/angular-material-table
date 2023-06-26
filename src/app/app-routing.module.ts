import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialTableComponent } from './component/material-table/material-table.component';
import { BasicTableComponent } from './component/basic-table/basic-table.component';

const routes: Routes = [
  {path : '', redirectTo:'matBasicTable', pathMatch:'full'},
  {path: 'matBasicTable', component:BasicTableComponent},
  {path: 'matTable', component:MaterialTableComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
