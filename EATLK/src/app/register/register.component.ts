import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: any;
  password: any;
  conf_password: any;
  type: any;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  handleLogin(e:any) {
    e.preventDefault();
    let credentials = {
      username: this.username,
      password: this.password,
      conf_password: this.password,
      type: this.type,
      active: 0
    }

    this.authService.register(credentials)
      .subscribe(data => {
        console.log(data);
      });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(async(params) => {
      this.type = params.get("type");
    })
  }

}
