import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Veiculo } from './veiculo-create/veiculo.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl = "https://localhost:5001/api/automovel"

  constructor(private snackBar: MatSnackBar, private http : HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(veiculo: Veiculo): Observable<Veiculo>{
    return this.http.post<Veiculo>(`${this.baseUrl}/create`, veiculo)
  }

  read():Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(`${this.baseUrl}/list`)
  }

}
