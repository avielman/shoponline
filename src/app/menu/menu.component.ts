import { Component, OnInit } from '@angular/core';
import { Menu, Func, class_templates } from './class_templates';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  menu: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    let m: Menu;

    this.addMenu('Contraer', '#', 'fa fa-rectangle-xmark');
    this.addMenu('Menu');
    this.addMenu('Inicio');
    this.addMenu('Acerca De', '/acerca');
    this.addMenu('Productos', 'Productos');
    this.addMenu('Contacto', '/Contacto', 'fa fa-rectangle-xmark');
  };

  addMenu(text: string, link?:string, icon?:string): void {
    let me: Menu = new Menu();
    let f: Func = new Func();
    let alink: string;
    let aicon: string;

    alink = f.iif(f.isNotNull(link), link, text);

    me.add(text, text, text + '.ico', text, false);
    this.menu.push(me);
  };

  clicMenu() {
    const menuItems = document.getElementsByClassName('nav-link');
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', () => {
        console.log(`Haz clic en ${menuItems[i].textContent}`);
        // Realiza la acción deseada aquí
      });
    }
  }; // en clicMenu

}


