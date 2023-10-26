export class Categoria{
  constructor(nombre){
    this.nombre = nombre 
  }
}

export class Frase{
  constructor(categoria,frase){
    this.categoria = categoria
    this.frase = frase
  }
}