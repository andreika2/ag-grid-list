import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GridDataVideoResponseI } from '../../interfaces/grid-data-video-response';

@Injectable()
export class AgGridDataService {

  private BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  private apiKey = 'AIzaSyA8JJrz-Ux3mG1thMshJOAKtWUy7UzKqWc';
  private defaultParamsList: HttpParams = this.initDefaultParamsList();

  constructor(private http: HttpClient) { }

  public getGridDataVideoList(): Observable<GridDataVideoResponseI> {
    return this.http.get<GridDataVideoResponseI>(this.BASE_URL, {params: this.defaultParamsList});
  }

  public getGridFaceData(): Observable<GridDataVideoResponseI> {
    return this.http.get<GridDataVideoResponseI>(`/assets/facedata.json`);
  }

  private initDefaultParamsList(): HttpParams {
    return new HttpParams()
      .append('key', this.apiKey)
      .append('maxResults', '50')
      .append('type', 'video')
      .append('part', 'snippet')
      .append('q', 'john');
  }

}
