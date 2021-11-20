import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper/helper.service';

@Component({
  selector: 'app-your-account',
  templateUrl: './your-account.component.html',
  styleUrls: ['./your-account.component.css'],
})
export class YourAccountComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService.setTitle('Your Account');
  }

  getUserDetails() {
    return JSON.parse(
      this.helperService.getItem('details') || JSON.stringify({})
    );
  }
}
