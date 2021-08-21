import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ServicesService } from '../shared/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  servicesList: any = [];

  constructor(private servicesService: ServicesService, meta: Meta, title: Title) {
    // Sets the <title></title>
    title.setTitle('Estudio Dellarossa & Associados');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: 'Estudio Dellarossa' },
      { name: 'description', content: 'Somos un estudio juridico de la ciudad de Cordoba y nos especializamos en derecho laboral y cobranza.' },
    ]);
  }

  ngOnInit() {
    this.servicesList = this.servicesService.items;
  }

  inspirationMessage = {
    title: 'Nuestra inspiracion',
    phraseOne: 'Honeste vivere, alterum non laedere et suum quique tribuere..',
    phraseTwo: 'Vive honestamente, no hagas daño a nadie y da a cada uno lo suyo',
    author: '-Domicio Ulpiano-'
  }

}
