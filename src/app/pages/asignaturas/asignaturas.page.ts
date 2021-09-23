import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  personas=[{
    nombre:'Programacion AppMoviles 003D',
    apellido:'Alejandro Sanhueza',
    asistencia:'120%'

  },
  {
    nombre:'Estadistica Descriptiva A005',
    apellido:'Manolo Suazo',
    asistencia:'10%'
  },

  {
    nombre:'Ingles D007',
    apellido:'Claudio Palma',
    asistencia:'68%'

  },
  {
    nombre:'Arquitectura 003D',
    apellido:'Jazna muñoz',
    asistencia:'85%'

  },
  {
    nombre:'Calidad de Software 002D',
    apellido:'Carlos Riffo',
    asistencia:'70%'

  },
  {
    nombre:'Etica para el trabajo 002D',
    apellido:'Claudia Palma',
    asistencia:'100%'

  },
  {
    nombre:'Proceso Portafolio 420D',
    apellido:'Andres Trujillo',
    asistencia:'0%'

  },
    ]

  constructor() { }

  ngOnInit() {
  }

}
