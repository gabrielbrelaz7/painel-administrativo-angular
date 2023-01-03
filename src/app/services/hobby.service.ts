import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor(private http: HttpClient) { }

  upload(video: Set<File>) {

    const formData = new FormData();
    video.forEach(file => formData.append('file', file, file.name));
    // const request = new HttpRequest('PUT', 'http://localhost:3000/video/1', formData);
    // return this.http.request(request);

    return this.http.put('http://localhost:3000/video/1', formData, {
      observe: 'events',
      reportProgress: true
    })

  }

}
