function removeDoCarrinho(produto) {
  const foundIndex = listaDoCarrinho.findIndex(product => product === produto)
  let remove = listaDoCarrinho.splice(foundIndex)
  return remove
}