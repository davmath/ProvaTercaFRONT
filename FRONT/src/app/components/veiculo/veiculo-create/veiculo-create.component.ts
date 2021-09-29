import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Router } from '@angular/router'
import { Veiculo } from './veiculo.model';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {

    veiculo: Veiculo = {
      marca: '',
      modelo: '',
      placa: '',
      cor: ''
    }

  constructor(private veiculoService: VeiculoService, private router: Router) { }

  ngOnInit(): void {
  }

  createVeiculo() : void{
    this.veiculoService.create(this.veiculo).subscribe(()=>{
      this.veiculoService.showMessage('Veículo cadastrado')
      this.router.navigate(['/veiculos'])


    })
  }

  cancel(): void{
    this.router.navigate(['/veiculos'])
  }
}
