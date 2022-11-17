import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebApiFetchRandomService {

  constructor(private httpClient: HttpClient) {
    this.fetchRandomData();
   }

  private randomData: Array<Array<number>> = [];

  private fetchRandomData(): void {
    this.httpClient.get<Array<Array<number>>>(environment.webAPIUri)
      .subscribe(respond => this.randomData = respond);
  }

  getRandomData(): Array<Array<number>> {
    return this.randomData;
  }
}
