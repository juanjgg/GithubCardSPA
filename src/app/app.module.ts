import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardUserModule } from './components/card-user/card-user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
