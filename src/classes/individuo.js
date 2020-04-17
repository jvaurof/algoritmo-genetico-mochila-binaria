function Individuo() {
  let cromossomo = []
  let fitness = 0

  this.getCromossomo = function () {
    return cromossomo.slice()
  }

  this.getFitness = function () {
    return fitness
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

  this.inverterGene = function (gene) {
    if (cromossomo[gene] == 0)
      cromossomo[gene] = 1
    else
      cromossomo[gene] = 0
  }
}

module.exports = Individuo