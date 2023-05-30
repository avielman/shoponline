import { Component } from '@angular/core';

export class class_templates {
  id: number;
  name: string;
  descripcion: string;
  id_role: number;
  constructor() {
    this.id = -1;
    this.name = '';
    this.descripcion = '';
    this.id_role = 0;
  }
}

export class Menu {
  title: string = '';
  icon: string = '';
  url: string = '';
  alt: string = '';
  dropdown: boolean = false;

  constructor() {
    this.title = '';
    this.icon = '';
    this.url = '';
    this.alt = '';
    this.dropdown = false;
  }

  add(Atitulo: string, Aicon: string, Aurl: string, Aalt: string, Adropdown: boolean) {
    this.title = Atitulo;
    this.icon = Aicon;
    this.url = Aurl;
    this.alt = Aalt;
    this.dropdown = Adropdown;
  }
}

export class Func {

  public iif(val1: boolean, val2: any, val3: any): any {
    let variable: any;
    if (val1 === true) {
      variable = val2;
    } else {
      variable = val3;
    }
    return variable;
  }

  isNotNull(valor: any) {
    if (valor !== null && valor !== undefined) {
      return true;
    // El valor no es null ni undefined
    // Resto del código aquí
    } else {
      return false;
    }
  }
}

export class Producto {
  id: number = 0;
  codigo: number = 0;
  nombre: string = '';
  descripcion: string = '';
  precio: number = 0;
  imagen: any = {};
  etiquetas: string = '';
  constructor() {
    this.id = 0;
    this.codigo = 0;
    this.nombre = '';
    this.descripcion = '';
    this.precio = 0;
    this.imagen = {};
    this.etiquetas = '';
  }
  add(aid: number, acodigo: number, anombre: string, adescripcion: string, aprecio: number, aimagen: any, aetiquetas: string) {
    this.id = aid;
    this.codigo = acodigo;
    this.nombre = anombre;
    this.descripcion = adescripcion;
    this.precio = aprecio;
    this.imagen = aimagen;
    this.etiquetas = aetiquetas;
  }


}
