import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleNav() {
    const navLinks: any = document.querySelector('.site-navbar > ul');
    const navToggler: any = document.querySelector('.nav-toggler');
    navLinks.classList.toggle('open');
    navToggler.classList.toggle('toggler-open');
  }
}
