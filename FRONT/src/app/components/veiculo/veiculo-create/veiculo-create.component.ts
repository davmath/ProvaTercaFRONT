import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {

  constructor(private veiculoService: VeiculoService, private router: Router) { }

  ngOnInit(): void {
  }

  createVeiculo() : void{
    this.veiculoService.showMessage('Veículo cadastrado')
  }

  cancel(): void{
    this.router.navigate(['/veiculos'])
  }
}
