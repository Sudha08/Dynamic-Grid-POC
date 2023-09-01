import { Component, OnInit } from '@angular/core';
import { RspService } from '../services/rsp.service';

@Component({
  selector: 'app-rsp-comp',
  templateUrl: './rsp-comp.component.html',
  styleUrls: ['./rsp-comp.component.scss']
})
export class RspCompComponent implements OnInit {

  rspData: any;

    constructor(private rspService: RspService) {}

    ngOnInit(): void {
      this.rspService.getRspData().subscribe(data => {
        this.rspData = data;
      });
    }

}
