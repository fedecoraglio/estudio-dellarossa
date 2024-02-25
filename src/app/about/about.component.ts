import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  readonly lawyer1 = {
    description1: `Soy abogada y profesora en Ciencias Jurídicas recibida en la Facultad de Derecho de la UNC. Además, soy mamá de dos pequeños, Martina y Alejo.`,
    description2: `Gracias a la Universidad Pública, estudie abogacía porque creo en el derecho como una herramienta de transformación social a partir del reconocimiento de los derechos fundamentales como el resultado de luchas políticas. En este sentido nos gusta pensar a nuestra profesión desde una perspectiva integral comprendiendo que la ley no está sola, sino que se encuentra atravesada por múltiples factores: sociales, económicos, culturales.`,
    description3: `La docencia, por otra parte, me permite vincularme con mis estudiantes a partir de una construcción colectiva, en la que me toca transmitir contenidos jurídicos desde un posicionamiento reflexivo de la docencia y del derecho; con sentido liberador y con la intención de transmitir herramientas que les permitan formar sus opiniones como protagonistas del desarrollo de su ciudadanía, cargada de derechos y obligaciones.`,
    description4: `Es así que como operadores de la justicia trabajamos por el reconocimiento de una abogacía participativa y democrática.`,
  };

  readonly lawyer2 = {
    description1: `Soy abogada egresada de la Uiversidad Nacional de Córdoba, Secretaria de la Asociaicón Civil Inquilinos Córdoba, especializada en Derecho Laboral, de Familia, Civil y Previsional.`,
    description2: `En el Estudio Nanzer & Dellarosssa creemos en una forma de ejercer la profesión empática pero sobre todas las cosas resolutiva.`,
    description3: `Nos enfocamos en brindar un asesoramiento personalizado en la comprensión de que los inconvenientes legales simpre son más abarcativos que la letra de la ley.`,
    description4: `Ejercemos un derecho vivo en constante cambio, como así también las formas en que se practica, por ello trabajamos de forma remota a los fines de simplificar el contacto con nuestros clientes, enfocando nuestras energias en la solución pacífica de los conflictos, en el entendimiento de que la judicilización como primer medida es una respuesta del siglo pasado.`,
  };

  /**
   *
   * Soy Evangelina Dellarossa, abogada egresada de la Uiversidad Nacional de Córdoba, Secretaria de la Asociaicón Civil Inquilinos Córdoba, especializada en Derecho Laboral, de Familia, Civil y Previsional.
    En el Estudio Nanzer & Dellarosssa creemos en una forma de ejercer la profesión empática pero sobre todas las cosas resolutiva.
    Nos enfocamos en brindar un asesoramiento personalizado en la comprensión de que los inconvenientes legales simpre son más abarcativos que la letra de la ley.
    Ejercemos un derecho vivo en constante cambio, como así también las formas en que se practica, por ello trabajamos de forma remota a los fines de simplificar el contacto con nuestros clientes, enfocando nuestras energias en la solución pacífica de los conflictos, en el entendimiento de que la judicilización como primer medida es una respuesta del siglo pasado.
   */

  constructor() {}

  ngOnInit() {}
}
