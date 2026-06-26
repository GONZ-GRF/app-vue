<script setup lang="ts">
import { useProductoStore } from './stores/productoStore'

const store = useProductoStore()

store.agregarProducto({
  id: 1,
  nombre: 'Teclado RGB',
  precio: 250,
  stock: 12
})

store.agregarProducto({
  id: 2,
  nombre: 'Mouse Gamer',
  precio: 110,
  stock: 20
})

store.agregarProducto({
  id: 3,
  nombre: 'Monitor Gamer',
  precio: 1450,
  stock: 5
})
</script>

<template>
  <div class="contenedor">
    <div class="panel">

      <h1>Sistema de Gestion Dinamico</h1>

      <h2>Lista de Productos</h2>

      <div class="productos">

        <div
          class="tarjeta"
          v-for="producto in store.productos"
          :key="producto.id"
        >

          <h3>{{ producto.nombre }}</h3>

          <p><strong>ID:</strong> {{ producto.id }}</p>

          <p><strong>Precio:</strong>
            Bs. {{ producto.precio }}
          </p>

          <p><strong>Stock:</strong>
            {{ producto.stock }}
          </p>

        </div>

      </div>

      <div class="total">
        Total Inventario:
        Bs. {{ store.totalInventario }}
      </div>

    </div>
  </div>
</template>

<style>
body{
  margin:0;
  font-family:Arial,sans-serif;
  background:linear-gradient(135deg,#0f172a,#1e293b);
}

.contenedor{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:20px;
}

.panel{
  width:90%;
  max-width:900px;
  background:white;
  border-radius:20px;
  padding:30px;
  box-shadow:0 10px 30px rgba(0,0,0,.3);
}

h1{
  text-align:center;
  color:#0f172a;
}

h2{
  text-align:center;
  color:#2563eb;
}

.productos{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
  margin-top:30px;
}

.tarjeta{
  background:#f8fafc;
  border-radius:15px;
  padding:20px;
  text-align:center;
  box-shadow:0 4px 10px rgba(0,0,0,.1);
}

.tarjeta h3{
  color:#1d4ed8;
}

.total{
  margin-top:30px;
  text-align:center;
  font-size:1.5rem;
  font-weight:bold;
  color:white;
  background:#16a34a;
  padding:15px;
  border-radius:12px;
}
</style>