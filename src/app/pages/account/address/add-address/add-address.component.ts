import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper/helper.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})
export class AddAddressComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService.setTitle('Add Address');
  }
}
