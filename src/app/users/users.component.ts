import { ApiService } from './../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users = [];
  public totalUsers = 0;
  public usersPerPage = 4;
  public currentPage = 1;
  public pageSizeOptions = [1, 4 , 8, 12];
  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getUsers(this.usersPerPage, this.currentPage).subscribe((data: any) => {
      console.log(data);
      this.totalUsers = data.body.total;
      this.users = data.body.data;
      console.log(data.body.data);
    });
  }

  onChangedPage(pageData: PageEvent) {
    console.log(pageData);
    this.currentPage = pageData.pageIndex + 1;
    this.usersPerPage = pageData.pageSize;
    this.apiService.getUsers(this.usersPerPage, this.currentPage).subscribe((data: any) => {
      this.users = data.body.data;
    });
  }

}
