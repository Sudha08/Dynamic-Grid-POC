import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  personData: any;
  sideNavStatus: boolean = false;

    constructor(private personService: PersonService) {}

    ngOnInit(): void {
      this.personService.getAddressData().subscribe(data => {
        this.personData = data;
      });
    }
}
