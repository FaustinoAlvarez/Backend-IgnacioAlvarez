class ProductManager {
    constructor(){
        this.products=[]
    }
    addProduct(title, description, price, thumbnail, code, stock){
        let nuevoProducto={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        if(this.products.lenght===0){
            nuevoProducto.id=1
        }else{
            nuevoProducto.id=this.products.length+1
        }



        this.products.push(nuevoProducto)
    }

    getProducts(){
        return this.products
    }

    getProductsById(idProducto){
        let indiceProducts=this.products.findIndex(product=>product.id===idProducto)

        if(indiceProducts=== -1){
            console.log(`Not Found`)
            return
        }
        return this.products[indiceProducts]
    }
}

let pm=new ProductManager();

console.log(pm.getProducts())

pm.addProduct('GTA V', 'Juego de disparos', '$5400', 512488123401492, 'GTA V', 10  )

pm.addProduct('Valorant', 'Juego de disparos', '$Free', 982484523401492, 'Valorant', 10  )

pm.addProduct('Fortnite', 'Juego de disparos', '$Free', 11311253401492, 'Fortnite', 10  )
console.log(pm.getProducts())
