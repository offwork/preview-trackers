import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
/**
 * #Application Start
 * TODO:
 * - [X]decide how will be the UI layout for the application
 * - [X]determine theme colors for the application
 * - [X]select component kits that are intended to be used
 */
