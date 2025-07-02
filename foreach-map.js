const listaProdutos = ['pôster A4', 'pôster A5', 'camiseta lisa', 'camiseta estampada', 'pin de metal', 'cartela de adesivos'];

const listaAtualizada = listaProdutos.forEach((produto) => {
 return `${produto} - unidade`;
})
console.log(listaAtualizada);

