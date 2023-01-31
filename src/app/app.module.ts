import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactModule } from './contact/contact.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ScullyLibModule } from '@scullyio/ng-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ContactModule,
    SharedModule,
    ScullyLibModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
