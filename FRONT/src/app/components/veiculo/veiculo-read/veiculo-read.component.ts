import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo-create/veiculo.model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements OnInit {

  veiculos!: Veiculo[]

  constructor(private veiculoService : VeiculoService) { }

  ngOnInit(): void {
    this.veiculoService.read().subscribe(veiculos=>{
      this.veiculos = veiculos
      console.log(veiculos)
    })

  }

}
