import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getRedditPosts(argument:string){
    return this.http.get<any>('https://www.reddit.com/r/'+argument+'/hot.json?limit=100');
  }

}
