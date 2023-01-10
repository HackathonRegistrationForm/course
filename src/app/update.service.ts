import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {identifierName} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }
  update(data:any,id:any){
    return this.http.put('http://localhost:5000/course/updateCourseDetails/'+id,data)
  }
}
