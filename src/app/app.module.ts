import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { PipesComponent } from './topics/pipes/pipes.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { AdditionPipe } from './topics/pipes/addition.pipe';
import { AreaPipe } from './topics/pipes/area.pipe';
import { FileUploadComponent } from './topics/file-upload/file-upload.component';
import { SubjectsComponent } from './topics/subjects/subjects.component';
import { AddHeaderInterceptor} from './add-header.interceptor';
import { MergemapComponent } from './topics/mergemap/mergemap.component';
import { MicroFrontendComponent } from './topics/micro-frontend/micro-frontend.component';
import { LazyElementsModule } from '@angular-extensions/elements';
import { AutocompleteComponent } from './topics/autocomplete/autocomplete.component';
import { NodeServerDemoComponent } from './topics/node-server-demo/node-server-demo.component';
import { AwsDemoComponent } from './topics/aws-demo/aws-demo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicsListComponent,
    PipesComponent,
    AdditionPipe,
    AreaPipe,
    FileUploadComponent,
    SubjectsComponent,
    MergemapComponent,
    MicroFrontendComponent,
    AutocompleteComponent,
    NodeServerDemoComponent,
    AwsDemoComponent
  ],
  imports: [
    MaterialModules,
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LazyElementsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
   {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
