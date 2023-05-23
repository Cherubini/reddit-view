import { Component } from '@angular/core';
import { RedditService } from 'src/app/services/reddit-services/reddit-service.service';
import { Post } from 'src/app/models/post/post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  posts: Post[]=[];
  isLight =true;
  selectedArgument :string='all'
  constructor(private dataMangerServ: RedditService){
    this.loadPosts()
  }

  loadPosts() {
    this.dataMangerServ.getRedditPosts(this.selectedArgument).subscribe({
      next:data=>this.posts=data,
      error: err => console.log(err)
    })
  }

  changeTheme(){
    document.body.classList.toggle('dark-mode');
    this.isLight=!this.isLight;
  }

}
