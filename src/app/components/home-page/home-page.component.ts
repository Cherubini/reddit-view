import { Component } from '@angular/core';
import { RedditService } from 'src/app/services/reddit-services/reddit-service.service';
import { Post } from 'src/app/models/post/post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  isLight =true;
  selectedArgument :string='all'
  posts:Post[];
  constructor(private dataMangerServ: RedditService){
    this.loadPosts()
  }

  loadPosts() {
    this.dataMangerServ.getRedditPosts(this.selectedArgument).subscribe({
      next:data=>{
        for(let i=0; i<data.data.children.length; i++){
          let tempPost :Post;
        }
        console.log(data.data.children[i].data.title)
      },
      error: err => console.log(err)
    })
  }

  changeTheme(){
    document.body.classList.toggle('dark-mode');
    this.isLight=!this.isLight;
  }

}
