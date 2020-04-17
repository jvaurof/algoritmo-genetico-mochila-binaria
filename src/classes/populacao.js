const Individuo = require('./individuo.js')

function Populacao() {
  let tamanho
  let individuos = []

  this.getTamanho = function () {
    return tamanho
  }

  this.getIndividuos = function () {
    return individuos.slice()
  }

  this.setTamanho = function (t) {
    tamanho = t
  }

  this.iniciarPopulacao = function (quantidadeItens) {
    for (let j = 0; j < tamanho; j++) {
      const individuo = new Individuo()

      individuo.setCromossomoIncial(quantidadeItens)
      individuos.push(individuo)
    }
  }

  this.calcularFitness = function (mochilaItens) {
    /*calcular fitness*/
    individuos.forEach(individuo => {
      individuo.setFitness(0)

      individuo.getCromossomo().forEach((gene, index) => {
        if (gene == 1)
          individuo.setFitness(mochilaItens[index].getPeso() + individuo.getFitness())
      })
    })

    /*rankerar fitness*/
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

  this.exibirPopoulacao = function () {
    let p = []
    individuos.forEach((individuo, index) => {
      //p[index] = individuo.getCromossomo()
      p[index] = individuo.getFitness()
    })
    console.table(p)
  }
}

module.exports = Populacao