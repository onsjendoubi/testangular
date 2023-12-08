import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:'',redirectTo:'add',pathMatch:'full'},
  {path:'add',component:AddComponent},
  {path:'prod',component:ProductComponent},
  {path:'list',component:ListComponent},
  {path:'**',component:NotfoundComponent} ,
  {path:'prod/add',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
