import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';


import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { ManageDataComponent } from './components/manage-data/manage-data.component';
import { Papa } from 'ngx-papaparse';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ManageDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
