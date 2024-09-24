import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  displayedColumns: string[] = ['select', 'id', 'nama', 'email', 'telepon', 'alamat'];
  dataSource = new MatTableDataSource<any>();
  selectedRows: any[] = [];

  constructor(private papa: Papa, private http: HttpClient) {}

  // Fungsi untuk membaca file CSV
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.papa.parse(file, {
        header: true,
        complete: (result) => {
          console.log(result.data, "data");
          this.dataSource.data = result.data;

        }
      });
    }
  }

  // Fungsi untuk memilih baris
  selectRow(row: any) {
    const index = this.selectedRows.indexOf(row);
    if (index === -1) {
      this.selectedRows.push(row);
    } else {
      this.selectedRows.splice(index, 1);
    }
  }

  // Fungsi untuk mengirim data yang dipilih ke backend
  importSelectedData(): void {
    this.http.post('http://localhost:5000/api/import', this.selectedRows)
      .subscribe(response => {
        console.log('Data berhasil diimpor!', response);
      }, error => {
        console.error('Gagal mengimpor data!', error);
      });
  }
}
