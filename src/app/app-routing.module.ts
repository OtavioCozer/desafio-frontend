import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './components/listing/listing.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'listing', component: ListingComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
