function Product(name,cat,pr,st) {
    this.name = name;
    this.category = cat;
    this.price = pr;
    this.stock = st;
}

function Inventory() {
    this.products = [];

    this.addProd = function(prod) {
        this.products.push(prod);
        console.log(`Added ${prod.name} to the inventory`);
    }

    this.deleteProd = function(name) {
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].name == name){
                this.products.splice(i,1);
                console.log(`Deleted ${name} from inventory`);
                break;
            }
        }
    }
}

const pr1 = new Product('Laptop','Elec',899,10)
const pr2 = new Product('Book','Books',20,50)

const inven = new Inventory();
inven.addProd(pr1);
inven.addProd(pr2);
console.log(inven.products);

inven.deleteProd('Laptop');
console.log(inven.products);