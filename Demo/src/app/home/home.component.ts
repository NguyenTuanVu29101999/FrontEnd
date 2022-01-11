import { TokenStorageService } from './../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private token:TokenStorageService) { }

  ngOnInit(): void {
  }

  logout(){
    this.token.logOut();
    this.router.navigateByUrl('/user/login');
  }

  isUserLogged(){
    const user = localStorage.getItem('token');
    return user && user.length > 0;
  }

}
