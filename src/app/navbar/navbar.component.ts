import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit { 

    toggleMenu: boolean = false;
    isCollapse: boolean = true;
    
    constructor() {

    }

    ngOnInit() {
    }  

    onToggleMenu() {
        this.toggleMenu = !this.toggleMenu;
    }
}