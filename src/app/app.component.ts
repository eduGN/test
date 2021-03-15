import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  pokemons = new Array()
  itemsNum = 24

  async getPokemon() {

    let random = Math.floor(Math.random() * 499 + 1) // 0 - 500
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    const data = await res.json()

    let name = data.forms[0].name.charAt(0).toUpperCase() + data.forms[0].name.slice(1);
    let pokemon = {
      name: name,
      img: data.sprites.other["official-artwork"].front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      number: random
    }
    this.pokemons.push(pokemon)
  }

  ngOnInit() {
    for(let i=0;i<this.itemsNum;i++){
      this.getPokemon();
    }
  }
}
