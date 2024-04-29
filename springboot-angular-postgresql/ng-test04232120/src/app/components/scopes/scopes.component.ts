import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScopesService } from '../../services/scopes.service';

@Component({
  selector: 'app-scopes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './scopes.component.html',
  styleUrl: './scopes.component.css'
})
export class ScopesComponent implements OnInit {

  scopes: any[] = [];

  constructor(private scopesService: ScopesService) {}

  ngOnInit(): void {
    this.scopesService.get()
      .subscribe(response => this.scopes = response);
  }

}
