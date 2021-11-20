import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper/helper.service';

@Component({
  selector: 'app-login-security',
  templateUrl: './login-security.component.html',
  styleUrls: ['./login-security.component.css'],
})
export class LoginSecurityComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService.setTitle('Login & Security');
  }
}
