import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopheadingComponent} from './topheading/topheading.component'
import {UsComponent} from './us/us.component'
import {EgComponent} from './eg/eg.component'
import {JisComponent} from './jis/jis.component'

const routes: Routes = [
  {
    path: '',
    component: JisComponent,// Profil
  },
  {
    path: 'de',
    component: TopheadingComponent,//Deutschland 
  },
{
  path: 'us',
    component: UsComponent,//US news
},
{
  path: 'aegypten',
    component: EgComponent,//Egy news
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
