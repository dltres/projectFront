import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {
  URL = 'https://projectbackend-uhrk.onrender.com/acerca/';
//URL= 'http://localhost:8080/acerca/';
  constructor(private httpClient: HttpClient) { }

}