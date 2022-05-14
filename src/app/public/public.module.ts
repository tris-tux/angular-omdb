import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { MaterialDesign } from '../material-design/material';
import { AnagramComponent } from './anagram/anagram.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'detail',
        component: DetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [DetailComponent, AnagramComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class PublicModule { }
