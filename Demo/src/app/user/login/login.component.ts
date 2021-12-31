import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = {
    UserName: '',
    Password: ''
  }

  constructor(private router:Router,
    private fb:FormBuilder,
    private service:UserService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
    this.router.navigateByUrl('/home');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
        console.log('Login Successful.', 'success');
      },
      err => {
        if (err.status == 400)
          console.log('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }


}
