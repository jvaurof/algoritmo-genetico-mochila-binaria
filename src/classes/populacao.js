const Individuo = require('./individuo.js')

function Populacao() {
  let tamanho
  let individuos = []

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
    /*calcular fitness*/
    individuos.forEach(individuo => {
      individuo.getCromossomo().forEach((gene, index) => {
        if (gene == 1)
          individuo.setFitness(mochilaItens[index].getPeso() + individuo.getFitness())
      })
    })

    /*rankerar fitness*/
    individuos.sort((a, b) => {
      return b.getFitness() - a.getFitness()
    })

    /*definir id*/
    individuos.forEach((individuo, index) => {
      individuo.setId(index)
    })
  }
}

module.exports = Populacao