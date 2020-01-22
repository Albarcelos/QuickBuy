import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class ProdutoServico {

  private BaseURL: string;
  private _produto: Produto;

}
