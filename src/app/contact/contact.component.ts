import { Component, OnInit } from '@angular/core';
import { EmailService, IMessage } from '../shared/email.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  
  message: IMessage = {};
  showMsgSucess = false;
  showMsgError = false;
  isProcessingEmail = false;

  constructor(private emailService: EmailService, meta: Meta, title: Title) {
      // Sets the <title></title>
      title.setTitle('Contacto Estudio Dellarossa');

      // Sets the <meta> tag for the page
      meta.addTags([
        { name: 'author', content: 'Estudio Dellarossa & Asociados' },
        { name: 'description', content: 'Dejanos tu mensaje y te respondemos rapidamente' },
      ]);
  }

  ngOnInit() {
    this.showMsgSucess = false;
    this.showMsgError = false;
    this.isProcessingEmail = false;
  }

  sendEmail(message: IMessage) {
    this.isProcessingEmail = true;
    this.showMsgSucess = false;
    this.showMsgError = false;
    this.emailService.sendEmail(message).subscribe(res => {
      console.info('AppComponent Success', res);
      this.showMsgSucess = true;
      this.showMsgError = false;
      this.message = {}
      this.isProcessingEmail = false;
      setTimeout(() => {
        this.showMsgSucess = false;
        this.showMsgError = false;
      }, 8000);
    }, error => {
      console.info('AppComponent Error', error);
        this.showMsgSucess = false;
        this.showMsgError = true;
        this.message = {}
        this.isProcessingEmail = false;
        setTimeout(() => {
          this.showMsgSucess = false;
          this.showMsgError = false;
        }, 8000);
    });
  }

}
