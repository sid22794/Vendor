import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper/helper.service';

@Component({
  selector: 'app-payment-options-list',
  templateUrl: './payment-options-list.component.html',
  styleUrls: ['./payment-options-list.component.css'],
})
export class PaymentOptionsListComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService.setTitle('Payment Options');
  }
}
