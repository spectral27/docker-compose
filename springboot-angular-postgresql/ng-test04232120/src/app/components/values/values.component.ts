import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../services/values.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [NgFor],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css'
})
export class ValuesComponent implements OnInit {

  values: any[] = [];

  constructor(private valuesService: ValuesService) {

  }

  ngOnInit(): void {
    this.valuesService.get()
      .subscribe(response => this.values = response);
  }

}
