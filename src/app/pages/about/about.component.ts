import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../helper/helper.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService.setTitle('About');
  }
}
