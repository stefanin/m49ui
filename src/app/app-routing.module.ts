import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocatinsComponent } from './locatins/locatins.component';
import { TagComponent } from './view/tag/tag.component';

const routes: Routes = [
  {path:'locations', component:LocatinsComponent},
  {path: 'tag/:tag', component: TagComponent},
  { path: '',   redirectTo: '/locations', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
