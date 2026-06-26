import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
}

export const useProductoStore = defineStore('producto', () => {

  const productos = ref<Producto[]>([])

  const totalInventario = computed(() =>
    productos.value.reduce(
      (total, producto) =>
        total + producto.precio * producto.stock,
      0
    )
  )

  function agregarProducto(producto: Producto) {
    productos.value.push(producto)
  }

  return {
    productos,
    totalInventario,
    agregarProducto
  }
})