import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper/helper.service';

@Component({
  selector: 'app-add-payment-options',
  templateUrl: './add-payment-options.component.html',
  styleUrls: ['./add-payment-options.component.css'],
})
export class AddPaymentOptionsComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService.setTitle('Add Payment Options');
  }
}
