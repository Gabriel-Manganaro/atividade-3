import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})

export class ComponentsComponent implements OnInit {
   
  titulo = "Colaborador"

   dados = {

    nome:" Nathan Carlos Exercicio",
    salario: 4500,
    cargo:"Dep ip ",
    id:7

  };

  constructor() { }


  ngOnInit(): void {
  }

}
