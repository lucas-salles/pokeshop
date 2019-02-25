// TODO


// Gerando container com pokemons
const pokemonsBlock = document.querySelector('#pokemons')
for (const pokemon of pokemonList) {
    let result = `<div class="pokemon-view">
    <img class="pokemon-view-img" src="${pokemon.img}" alt="${pokemon.name}">
    <span class="pokemon-view-name">${pokemon.name}</span>
    <span class="pokemon-view-price">R$ ${pokemon.price.toFixed(2)}</span>
    <button class="pokemon-view-shop">COMPRAR</button>
  </div>`
  pokemonsBlock.insertAdjacentHTML('beforeend', result)
}



// Eventos do botão que leva pro topo
const navTop = document.querySelector('.nav-top')
document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 1/3) {
        navTop.className = 'nav-top'
    }
    else {
        navTop.className = 'nav-top hidden'
    }
})

navTop.addEventListener('click', () => {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
    left: 0
  })
})


// Evento do carrinho de compras
const btns = Array.from(document.querySelectorAll('.pokemon-view-shop'))
const cartCount = document.querySelector('.cart-count')
for (const btn of btns) {
    btn.addEventListener('click', () => {
        cartCount.innerHTML = eval(cartCount.innerHTML) + 1 
    })
}