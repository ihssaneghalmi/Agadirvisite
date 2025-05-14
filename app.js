
let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

 iconCart.addEventListener('click', ()=>{
    if(cart.style.right == '-100%'){
       cart.style.right = '0';
       container.style.transform = 'translateX(-400px)';
    }
    else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
 })

close.addEventListener('click', ()=>{
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})
//get data from file json
let products = null;
fetch('product.json')
.then(response => response.json())
.then(data => {
    products = data;
    addDataToHTML();
})
//show data in  list html
function addDataToHTML(){
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';
    //add new datas
    if(products != null){
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML =
            `<img src="${product.image}" >
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
           <button onclick="addCart(${product.id})">Add To Cart</button>`;
         listProductHTML.appendChild(newProduct);
        });
    }
}
