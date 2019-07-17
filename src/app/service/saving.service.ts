import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Saving } from '../core/saving';
import { Observable } from 'rxjs';

const api = environment.api + 'result';

@Injectable({
  providedIn: 'root'
})
export class SavingService {


  constructor(private http: HttpClient) { }

}
