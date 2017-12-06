import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map'

import { environment } from './../../environments/environment';

@Injectable()
export class HomeService {

  // private url: string = `http://localhost:3001`
  private url: string = `https://watson-video.herokuapp.com`
  // private url: string = ``
  // private url: string = environment.api_url
  public static timeStamp: number

  constructor(
    private http: Http
  ) { }

  static getTimeStamp(): number {

    return this.timeStamp
  }

  static setTimeStamp(time: number) {
    
    this.timeStamp = time
  }

  buscarTodosVideos(): Observable<any> {

    return this.http.get(`/apiswatson/allvideos`)
      .map(res => res.json())
  }

  buscarVideos(data): Observable<any> {

    let body = JSON.stringify({data})
    let headers = new Headers({'Content-type': 'application/json'})

    return this.http.post('/apiswatson/trechos', body, {headers: headers})
      .map(res => res.json())
  }

  enviarAudio(data): Observable<any> {

    let body = JSON.stringify(data)
    let headers = new Headers({'Content-type': 'application/json'})

    return this.http.post(this.url + '/apiswatson/audio', body, {headers: headers})
      .map(res => res.json())
  }

  removerVideo(video) {

    return this.http.delete('/apiswatson/' + video)
      .map(res => res.json())
  }
}
