import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { PipesComponent } from './topics/pipes/pipes.component';
import { FileUploadComponent } from './topics/file-upload/file-upload.component';
import { SubjectsComponent } from './topics/subjects/subjects.component';
import { MergemapComponent } from './topics/mergemap/mergemap.component';
import { MicroFrontendComponent } from './topics/micro-frontend/micro-frontend.component';
import { AutocompleteComponent } from './topics/autocomplete/autocomplete.component';
import { NodeServerDemoComponent } from './topics/node-server-demo/node-server-demo.component';
import { AwsDemoComponent } from './topics/aws-demo/aws-demo.component';
const routes: Routes = [
  {
    path: 'pipes',
    component: PipesComponent,
    //canActivate: [authGuard]
  },
  {
    path: 'file-upload',
    component: FileUploadComponent,
    //canActivate: [authGuard]
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
    //canActivate: [authGuard]
  },
  {
    path: 'mergemap',
    component: MergemapComponent,
    //canActivate: [authGuard]
  },
  {
    path: 'micro-frontend',
    component: MicroFrontendComponent,
    //canActivate: [authGuard]
  },
  {
    path: 'debounce',
    component: AutocompleteComponent,
    //canActivate: [authGuard]
  },
  {
    path: 'node-server-demo',
    component: NodeServerDemoComponent,
    //canActivate: [authGuard]
  },
  {
    path: 'aws-demo',
    component: AwsDemoComponent,
    //canActivate: [authGuard]
  },
  { path: '',   redirectTo: '/aws-demo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
