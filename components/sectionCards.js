export default function SectionCards (dados) {
    return `<div class="card">
    <img src='${dados.src}' alt="">
    <p class="msg-promo">30% OFF</p>
    <button class="btn-section">Comprar</button>
  </div>`
}