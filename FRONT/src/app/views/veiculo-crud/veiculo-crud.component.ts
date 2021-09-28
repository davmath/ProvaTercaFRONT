import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-veiculo-crud',
  templateUrl: './veiculo-crud.component.html',
  styleUrls: ['./veiculo-crud.component.css']
})
export class VeiculoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToVeiculoCreate():void{
    this.router.navigate(['/veiculos/create'])
  }
}
