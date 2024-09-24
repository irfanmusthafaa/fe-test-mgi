import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nama', 'email', 'telepon', 'alamat', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.http.get('http://localhost:5000/api/users')
      .subscribe((data: any) => {
        console.log(data, "data");
        this.dataSource.data = data;
      });
  }

  deleteUser(id: string): void {
    this.http.delete(`http://localhost:5000/api/users/${id}`)
      .subscribe(() => {
        this.loadData();
      });
  }

  exportToExcel(): void {
    window.open('http://localhost:5000/api/export', '_blank');
  }

  
}
