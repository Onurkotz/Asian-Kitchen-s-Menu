const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


let butonDiv = document.querySelector(".btn-container")


let id1 = `<div class="menu-items col-lg-6 col-sm-12">
<img src=${menu[0].img} alt=${menu[0].title} class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${menu[0].title}</h4>
    <h4 class="price">${menu[0].price}</h4>
  </div>
  <div class="menu-text">
  ${menu[0].desc}
  </div>
</div>
</div>
`
let id2 = `<div class="menu-items col-lg-6 col-sm-12">
<img src=${menu[1].img} alt=${menu[1].title} class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${menu[1].title}</h4>
    <h4 class="price">${menu[1].price}</h4>
  </div>
  <div class="menu-text">
  ${menu[1].desc}
  </div>
</div>
</div>
`
let id3 = `<div class="menu-items col-lg-6 col-sm-12">
<img src=${menu[2].img} alt=${menu[2].title} class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${menu[2].title}</h4>
    <h4 class="price">${menu[2].price}</h4>
  </div>
  <div class="menu-text">
  ${menu[2].desc}
  </div>
</div>
</div>
`
let id4 = `<div class="menu-items col-lg-6 col-sm-12">
<img src=${menu[3].img} alt=${menu[3].title} class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${menu[3].title}</h4>
    <h4 class="price">${menu[3].price}</h4>
  </div>
  <div class="menu-text">
  ${menu[3].desc}
  </div>
</div>
</div>
`
let id5 = `<div class="menu-items col-lg-6 col-sm-12">
<img src=${menu[4].img} alt=${menu[4].title} class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${menu[4].title}</h4>
    <h4 class="price">${menu[4].price}</h4>
  </div>
  <div class="menu-text">
  ${menu[4].desc}
  </div>
</div>
</div>
`
let id6 = `<div class="menu-items col-lg-6 col-sm-12">
<img src=${menu[5].img} alt=${menu[5].title} class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${menu[5].title}</h4>
    <h4 class="price">${menu[5].price}</h4>
  </div>
  <div class="menu-text">
  ${menu[5].desc}
  </div>
</div>
</div>
`
let id7 = `<div class="menu-items col-lg-6 col-sm-12">
<img src=${menu[6].img} alt=${menu[6].title} class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${menu[6].title}</h4>
    <h4 class="price">${menu[6].price}</h4>
  </div>
  <div class="menu-text">
  ${menu[6].desc}
  </div>
</div>
</div>
`
let id8 = `<div class="menu-items col-lg-6 col-sm-12">
<img src=${menu[7].img} alt=${menu[7].title} class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${menu[7].title}</h4>
    <h4 class="price">${menu[7].price}</h4>
  </div>
  <div class="menu-text">
  ${menu[7].desc}
  </div>
</div>
</div>
`
let id9 = `<div class="menu-items col-lg-6 col-sm-12">
<img src=${menu[8].img} alt=${menu[8].title} class="photo">
<div class="menu-info">
  <div class="menu-title">
    <h4>${menu[8].title}</h4>
    <h4 class="price">${menu[8].price}</h4>
  </div>
  <div class="menu-text">
  ${menu[8].desc}
  </div>
</div>
</div>
`
let main = document.querySelector("#main")

main.innerHTML = id1 + id2 + id3 + id4 + id5 + id6 + id7 + id8 + id9

let buton = document.createElement('button')
buton.classList.add("btn", "btn-outline-dark", "btn-item")
buton.innerText = "All"
butonDiv.append(buton)

buton.addEventListener('click', allbuton)
function allbuton(event){
  main.innerHTML = id1 + id2 + id3 + id4 + id5 + id6 + id7 + id8 + id9
}

let bKorea = document.createElement('button')
bKorea.classList.add("btn", "btn-outline-dark", "btn-item")
bKorea.innerText = "Korea"
butonDiv.appendChild(bKorea)

bKorea.addEventListener('click', kore)
function kore(event){
  main.innerHTML = id1 + id3 + id7
}

let bJapan = document.createElement('button')
bJapan.classList.add("btn", "btn-outline-dark", "btn-item")
bJapan.innerText = "Japan"
butonDiv.appendChild(bJapan)

bJapan.addEventListener('click', japonya)
function japonya(event){
  main.innerHTML = id2 + id6 + id9
}

let bChina = document.createElement('button')
bChina.classList.add("btn", "btn-outline-dark", "btn-item")
bChina.innerText = "China"
butonDiv.appendChild(bChina)

bChina.addEventListener('click', çin)
function çin(event){
  main.innerHTML = id4 + id5 + id8
}