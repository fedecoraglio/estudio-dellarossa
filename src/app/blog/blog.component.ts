import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    // Sets the <title></title>
    title.setTitle('Blog Estudio Nanzer & Dellarossa');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: 'Estudio Nanzer & Dellarossa' },
      { name: 'description', content: 'Seguinos en nuestro blog para saber las ultimas novedades' },
    ]);
  }

  ngOnInit() {
  }

}
