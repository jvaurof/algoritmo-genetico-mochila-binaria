function Individuo() {
  let cromossomo = []
  let fitness = 0
  let id

  this.getCromossomo = function () {
    return cromossomo
  }

  this.getFitness = function () {
    return fitness
  }

  this.getId = function () {
    return id
  }

  this.setCromossomo = function (quantidadeItens) {
    for (let i = 0; i < quantidadeItens; i++)
      cromossomo.push(Math.floor(Math.random() * 2))
  }

  this.setFitness = function (f) {
    fitness = f
  }

  this.setId = function (index) {
    id = index
  }
}

module.exports = Individuo