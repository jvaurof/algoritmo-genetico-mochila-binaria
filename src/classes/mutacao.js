function Mutacao(taxa = 5) {

  this.mutar = function (populacao, quantidadeItens) {

    populacao.getIndividuos().forEach((individuo) => {
      const sorteio = Math.floor(Math.random() * 100)

      if (sorteio < taxa) {
        const gene = Math.floor(Math.random() * quantidadeItens)

        individuo.inverterGene(gene)
      }
    });

  }
}

module.exports = Mutacao