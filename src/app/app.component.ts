import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from './helper/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  windowScrolled = false;
  constructor(public helperService: HelperService, private router: Router) {
    router.events.subscribe((event) => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    });
    console.log();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset > 70 ||
      document.documentElement.scrollTop > 70 ||
      document.body.scrollTop > 70
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getUserDetails() {
    return JSON.parse(
      this.helperService.getItem('details') || JSON.stringify({})
    );
  }
}
