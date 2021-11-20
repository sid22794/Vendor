import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper/helper.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService.setTitle('New-Cart');
  }
}
