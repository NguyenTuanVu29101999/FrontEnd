import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

const Admin = 'Admin';
const Customer = 'Customer';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private token:TokenStorageService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.token.logOut();
    this.router.navigateByUrl('/user/login');
  }

}
