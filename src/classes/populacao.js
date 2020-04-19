const Individuo = require('./individuo.js')
var sleep = require('sleep');

function Populacao() {
  let tamanho
  let individuos = []
  let geracao = 1

  this.getTamanho = function () {
    return tamanho
  }

  this.getIndividuos = function () {
    return individuos.slice()
  }

  this.setTamanho = function (t) {
    if (t <= 0) {
      console.log('O tamanho da população deve ser maior que 0.')
      process.exit(1)
    }

    tamanho = t % 2 == 0 ? t : ++t
  }

  this.setGeracao = function () {
    geracao++
  }

  this.iniciarPopulacao = function (quantidadeItens) {
    for (let j = 0; j < tamanho; j++) {
      const individuo = new Individuo()

      individuo.setCromossomoIncial(quantidadeItens)
      individuos.push(individuo)
    }
  }

  this.calcularFitness = function (mochila) {
    /*calcular fitness*/

    let fitness = individuos.length

    individuos.sort((a, b) => {
      return b.getPesoTotal(mochila.getItens()) - a.getPesoTotal(mochila.getItens())
    })

    individuos.forEach(individuo => {
      individuo.setFitness(0)
      tx = mochila.getLimitePeso()// * 1.20

      if (individuo.getPesoTotal(mochila.getItens()) <= tx) {
        individuo.setFitness(fitness * 2)
        fitness--
      }
    })

    fitness = 1

    individuos.forEach(individuo => {
      if (individuo.getPesoTotal(mochila.getItens()) > tx) {
        individuo.setFitness(fitness)
        fitness++
      }
    })

    individuos.sort((a, b) => {
      return b.getFitness() - a.getFitness()
    })
  }

  this.adicionarFilhos = function (filho1, filho2) {
    let individuo = new Individuo()
    individuo.setCromossomo(filho1)
    individuos.push(individuo)

    individuo = new Individuo()
    individuo.setCromossomo(filho2)
    individuos.push(individuo)
  }

  this.ajustarPopulacao = function () {
    individuos.splice(tamanho)
  }

  this.exibirPopoulacao = function (x) {
    let cromossomo = []
    let fitness = []
    let pesoTotal = []

    individuos.forEach((individuo, index) => {
      cromossomo[index] = individuo.getCromossomo()
      fitness[index] = individuo.getFitness()
      pesoTotal[index] = individuo.getPesoTotal(x)
    })
    console.table(cromossomo)
    console.table(fitness)
    console.table(pesoTotal)
    console.log('geração: ', geracao)
    console.log(' ')
    // sleep.msleep(500)
  }
}

module.exports = Populacao