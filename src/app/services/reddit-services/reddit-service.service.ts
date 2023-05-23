import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post/post';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getRedditPosts(argument:string):Observable<Post[]>{
    return this.http.get<any>('https://www.reddit.com/r/'+argument+'/hot.json?limit=100').pipe(
      map((obj)=>obj.data.children),
      tap((data)=>console.log('tap',data),
      )
    )
  }

}
