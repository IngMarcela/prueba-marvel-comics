import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { DataService } from './servicios/data.service';
import { HttpClientModule } from '@angular/common/http';
import { MarvelComponent } from './marvel/marvel.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
