import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper/helper.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService.setTitle('Product Name');
  }
}
