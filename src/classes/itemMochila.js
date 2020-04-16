function ItemMochila() {
  let peso

  this.getPeso = function () {
    return peso
  }

  this.setPeso = function (p) {
    peso = p
  }
}

module.exports = ItemMochila