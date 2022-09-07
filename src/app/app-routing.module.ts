import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeViewComponent } from './code-view/code-view.component';

const routes: Routes = [{path: "", component: CodeViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
