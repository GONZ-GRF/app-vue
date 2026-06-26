<script setup lang="ts">
import { useProductoStore } from './stores/productoStore'

const store = useProductoStore()

store.agregarProducto({
  id: 1,
  nombre: 'Teclado',
  precio: 250,
  stock: 12
})

store.agregarProducto({
  id: 2,
  nombre: 'Mouse',
  precio: 110,
  stock: 20
})
</script>

<template>
  <div>
    <h1>Lista de Productos</h1>

    <ul>
      <li v-for="producto in store.productos" :key="producto.id">
        {{ producto.nombre }} - Precio: {{ producto.precio }} - Stock: {{ producto.stock }}
      </li>
    </ul>

    <h2>Total Inventario: {{ store.totalInventario }}</h2>
  </div>
</template>