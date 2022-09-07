import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeViewComponent } from './code-view/code-view.component';
import { ParentComponent } from './parent/parent.component';

import { HttpClientModule } from '@angular/common/http';

//import {}

@NgModule({
  declarations: [
    AppComponent,
    CodeViewComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
