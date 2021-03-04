import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActuarialService } from '../actuarial.service';
import { Result } from '../model/result';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  displayedColumns: string[] = ['date', 'benchmark1', 'benchmark2', 'benchmark3', 'benchmark4', 'benchmark5'];

  constructor(public actuarialService: ActuarialService) { }

  ngOnInit(): void {
  }

}
