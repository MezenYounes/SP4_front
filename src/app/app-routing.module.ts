import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamionsComponent } from './camions/camions.component';
import { camion } from './model/camion.model';
import { AuthGuard } from './guards/secure.guard';
const routes: Routes = [
{path: "camions", component : CamionsComponent,canActivate:[AuthGuard], data : {roles:['ADMIN']}},

{ path: "", redirectTo: "camions", pathMatch: "full" }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
