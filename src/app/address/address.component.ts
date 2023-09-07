import { Component, OnInit  } from '@angular/core';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addressData: any;
  sideNavStatus: boolean = false;

  constructor(private addressService: AddressService) {}

  ngOnInit(): void {
    this.addressService.getAddressData().subscribe(data => {
      this.addressData = data;
    });
  }
}
