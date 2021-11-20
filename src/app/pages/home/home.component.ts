import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../helper/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  category: any[] = [];
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService.setTitle('Home');
    this.getAllCategories();
  }

  toggleMobileNav() {
    const navbar: any = document.querySelector('#navbar');
    navbar.classList.toggle('navbar-mobile');
    const mobileNavToggle: any = document.querySelector('.mobile-nav-toggle');
    mobileNavToggle.classList.toggle('bi-list');
    mobileNavToggle.classList.toggle('bi-x');
  }

  getAllCategories() {
    for (let i = 0; i < 6; i++) {
      const secondLevelCategory: any[] = [];
      for (let j = 0; j < 5; j++) {
        if (j == 1) {
          const thirdLevelCategory: any[] = [];
          for (let k = 0; k < 6; k++) {
            thirdLevelCategory.push({ name: `Drop Down ${k + 1}` });
          }
          secondLevelCategory.push({
            name: `Deep Drop Down`,
            child: thirdLevelCategory,
          });
        } else secondLevelCategory.push({ name: `Drop Down ${j + 1}` });
      }
      if (i == 3)
        this.category.push({
          name: `Category ${i + 1}`,
        });
      else
        this.category.push({
          name: `Category ${i + 1}`,
          child: secondLevelCategory,
        });
    }
  }
}
