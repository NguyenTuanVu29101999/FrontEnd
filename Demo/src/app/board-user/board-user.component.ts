import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  constructor(private token:TokenStorageService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.token.logOut();
    this.router.navigateByUrl('/user/login');
  }

}
