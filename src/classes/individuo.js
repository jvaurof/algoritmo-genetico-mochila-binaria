function Individuo() {
  let cromossomo = []
  let fitness = 0

  this.getCromossomo = function () {
    return cromossomo.slice()
  }

  this.getFitness = function () {
    return fitness
  }

  this.getPesoTotal = function (mochilaItens) {
    let pesoTotal = 0

    cromossomo.forEach((gene, index) => {
      if (gene == 1)
        pesoTotal += mochilaItens[index].getPeso()
    })

    return pesoTotal
  }

  this.setCromossomo = function (c) {
    cromossomo = c
  }

  this.setCromossomoIncial = function (quantidadeItens) {
    for (let i = 0; i < quantidadeItens; i++)
      cromossomo.push(Math.floor(Math.random() * 2))
  }

  this.setFitness = function (f) {
    fitness = f
  }

  /*  setPesototal = function () {
 
   } */

  this.inverterGene = function (gene) {
    cromossomo[gene] = cromossomo[gene] == 0 ? 1 : 0
  }
}

module.exports = Individuo