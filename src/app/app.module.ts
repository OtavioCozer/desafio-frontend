import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ListingComponent } from './components/listing/listing.component';
import { ResultComponent } from './components/result/result.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListingComponent,
    ResultComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
