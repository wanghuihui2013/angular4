import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';

import { NewServiceService } from './new-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
