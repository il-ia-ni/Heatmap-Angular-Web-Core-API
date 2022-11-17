import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebApiFetchRandomService {

  private counter = 0;

  constructor(private httpClient: HttpClient) { };

  public getRandomData(): Observable<Array<Array<number>>> {
    console.log(this.counter++ + ": The service is calling Web API...");
    return this.httpClient.get<Array<Array<number>>>(environment.webAPIUri);
  }

}
