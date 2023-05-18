let productos = []

const myApp = {

    data() {
        return {
            id: 0,
            imagenProducto: "",
            nombreProducto: "",
            precioProducto: "",
            misProductos: [],
            visible: false
        }
    },
    methods: {
        guardarProducto() {
            this.id++
            productos.push({ id: this.id, imagen: this.imagenProducto, nombre: this.nombreProducto, precio: this.precioProducto })
            localStorage.setItem("productos", JSON.stringify(productos))
            this.imagenProducto = ""
            this.nombreProducto = ""
            this.precioProducto = ""
        },
        mostrarCards() {
            this.misProductos = JSON.parse(localStorage.getItem("productos"))
            if (this.visible) {
                this.visible = false
            } else {
                this.visible = true
            }
        },
        eliminarCard(){
            let input = document.getElementById("inputID")
            this.misProductos = JSON.parse(localStorage.getItem("productos"))
            let id = parseInt(input.value)
            const arrayFiltrado = this.misProductos.filter(item => item.id != id)
            localStorage.setItem("productos", JSON.stringify(arrayFiltrado))
            input.value = ""
            productos = arrayFiltrado
        },
        actualizarCard(){
            let input = document.getElementById("inputIDActualizar")
            let id = parseInt(input.value)
            this.misProductos = JSON.parse(localStorage.getItem("productos"))
            for(producto of this.misProductos){
                if(id === producto.id){
                    producto.imagen = this.imagenProducto
                    producto.nombre = this.nombreProducto
                    producto.precio = this.precioProducto
                }
            }
            localStorage.setItem("productos", JSON.stringify(this.misProductos))
            productos = this.misProductos
            this.imagenProducto = ""
            this.nombreProducto = ""
            this.precioProducto = ""
            input.value = ""
        }
    }
}

Vue.createApp(myApp).mount("#app")