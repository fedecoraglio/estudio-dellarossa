import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: number;

  constructor(
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    if(this.activatedRoute.snapshot !== null && this.activatedRoute.snapshot !== undefined &&
      this.activatedRoute.snapshot.queryParams !== null && this.activatedRoute.snapshot.queryParams !== undefined &&
      this.activatedRoute.snapshot.queryParams.id !== null && this.activatedRoute.snapshot.queryParams.id !== undefined) {
        this.id = parseInt(this.activatedRoute.snapshot.queryParams.id);
    } else {
      this.id = 1;
    }
  }
}
