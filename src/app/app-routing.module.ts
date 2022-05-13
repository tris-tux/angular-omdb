import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './public/detail/detail.component';
import { PublicComponent } from './public/public.component';


const routes: Routes = [
  {
    path: 'public',
    loadChildren:()=>import('./public/public.module').then(mod=>mod.PublicModule)
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '',
    component: PublicComponent
    // pathMatch: 'full',
    // redirectTo: '/public/public.module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
