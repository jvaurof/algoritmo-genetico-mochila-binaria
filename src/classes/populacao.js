const Individuo = require('./individuo.js')

function Populacao() {
  let tamanho
  let individuos = []

  /*   function getTamanho() {
      return tamanho
    } */

  this.getIndividuos = function () {
    return individuos
  }

  this.setTamanho = function (t) {
    tamanho = t
  }

  this.iniciar = function (quantidadeItens) {
    for (let j = 0; j < tamanho; j++) {
      const individuo = new Individuo()

      individuo.setCromossomo(quantidadeItens)
      individuos.push(individuo)
    }
  }

  this.calcularFitness = function (mochilaItens) {
    individuos.forEach(individuo => {
      individuo.getCromossomo().forEach((gene, index) => {
        if (gene == 1)
          individuo.setFitness(mochilaItens[index].getPeso() + individuo.getFitness())
      })
    })
  }

  this.rankearFitness = function () {
    individuos.sort((a, b) => {
      return b.getFitness() - a.getFitness()
    })
  }

  this.definirId = function () {
    individuos.forEach((individuo, index) => {
      individuo.setId(index)
    })
  }

  /*  function adicionarIndividuos(individuo) {
     individuos.push(individuo)
   } */
}

module.exports = Populacao