class Product {
    constructor (name, id, price ){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class shoppingCartItem {
    constructor( product, qte){
        this.product = product;
        this.qte = qte;
    }
    getTotalPrice() {
        return this.product.price * this.qte;
      }
}

class shopingCart {
    constructor (){
        this.item;
    }
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
      }
      additem(){
        this.items.push(item)
      }
      removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
      }
      displayItems() {
        this.items.array.forEach(item => {
            console.log(`${item.product.name}/ ${item.qte}/${item.getTotalPrice}`)
        });
      }
}

const product1 = new Product(1, 'Product 1', 10);
const product2 = new Product(2, 'Product 2', 20);

const item1 = new ShoppingCartItem(product1, 2);
const item2 = new ShoppingCartItem(product2, 1);

const cart = new ShoppingCart();
cart.addItem(item1);
cart.addItem(item2);

console.log('Total Items:', cart.getTotalItems());
console.log('Cart Items:');
cart.displayItems();

cart.removeItem(1);

console.log('Total Items:', cart.getTotalItems());
console.log('Cart Items:');
cart.displayItems();