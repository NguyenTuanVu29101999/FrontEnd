import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  constructor(private token:TokenStorageService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.token.logOut();
    this.router.navigateByUrl('/user/login');
  }

}
