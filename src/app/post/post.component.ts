import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postTitle:string;
  @Input() postContent :string;
  @Input() postLoveIts : number;
  @Input() postCreated_at : Date;

  constructor() { }

  ngOnInit() {
  }
  onLoveIt(){
    return this.postLoveIts = this.postLoveIts + 1;
  }
  dontLoveIt(){
    return this.postLoveIts = this.postLoveIts -1;
  }

}
