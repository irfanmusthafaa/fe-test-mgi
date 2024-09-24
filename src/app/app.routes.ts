
import { Routes } from '@angular/router';

import { ManageDataComponent } from './components/manage-data/manage-data.component';
import { UploadComponent } from './components/upload/upload.component';


export const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'manage-data', component: ManageDataComponent },
  { path: '', redirectTo: '/upload', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/upload' } 
];

