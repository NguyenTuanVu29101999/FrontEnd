import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


const Admin = 'Admin';
const Customer = 'Customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel: any = {
    UserName: '',
    Password: ''
  }
  isLoginFailed = false;
  isLoggedIn = false;
  roles: any=[];

  constructor(private router:Router,
    private fb:FormBuilder,
    private toastr:ToastrService,
    private service:UserService,
    private auth:AuthService ,
    private token:TokenStorageService) { }

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.token.getUser().roles;
    }
  }

  onSubmit(form: NgForm) {
    this.auth.login(form.value).subscribe(
      res => {

        this.token.saveToken(res.data.token);
        this.token.saveUser(res);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.token.getUser().data.roles;


        if(this.roles == Admin){
          this.router.navigateByUrl('/admin');
        }
        else if (this.roles == Customer)
          this.router.navigateByUrl('/customer');
        else
          this.router.navigateByUrl('/home');

        // localStorage.setItem('token', res.token);
        // this.router.navigateByUrl('/home');
        // console.log('Login Successful.', 'success');
        // console.log(res);
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else if (err.status == 403)
          this.toastr.error('403');
        else
          this.isLoginFailed = true;
          console.log(err);
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
