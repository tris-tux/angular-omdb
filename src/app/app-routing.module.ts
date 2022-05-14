import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagramComponent } from './public/anagram/anagram.component';
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
    path: 'anagram',
    component: AnagramComponent
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
