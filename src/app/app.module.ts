import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import {MenubarModule} from 'primeng-lts/menubar';
import { InputTextModule } from 'primeng-lts/inputtext';
import { ButtonModule } from 'primeng-lts/button';

import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { NoteComponent } from './pages/note/note.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteListComponent,
    NoteComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MenubarModule,
    InputTextModule,
    ButtonModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
