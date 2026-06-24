<script setup lang="ts">
import { ref } from 'vue';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  imagen: string;
}

const isAuthenticated = ref(false);
const username = ref('');
const password = ref('');
const errorMessage = ref('');

const listaProductos = ref<Producto[]>([
  {
    id: 101,
    nombre: "Teclado Mecánico RGB",
    precio: 250,
    stock: 12,
    imagen:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 102,
    nombre: "Ratón Óptico Inalámbrico",
    precio: 110,
    stock: 20,
    imagen:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 103,
    nombre: "Monitor para gamers de 24'' y 144 Hz",
    precio: 1450,
    stock: 5,
    imagen:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400",
  },
]);

const handleLogin = (): void => {
  if (
    username.value === "felix.maldonado" &&
    password.value === "itpm2026"
  ) {
    isAuthenticated.value = true;
    errorMessage.value = "";
  } else {
    errorMessage.value = "❌ Credenciales incorrectas";
  }
};

const handleLogout = (): void => {
  isAuthenticated.value = false;
  username.value = "";
  password.value = "";
};

const aumentarStock = (producto: Producto): void => {
  producto.stock++;
};

const disminuirStock = (producto: Producto): void => {
  if (producto.stock > 0) {
    producto.stock--;
  }
};
</script>

<template>
  <div style="max-width: 1000px; margin: auto; padding-top: 50px">
    
    <!-- LOGIN -->
    <div v-if="!isAuthenticated" style="text-align: center">
      <h2>Sistema de Gestión - ITPM</h2>

      <form @submit.prevent="handleLogin">
        <p>Usuario</p>

        <input
          v-model="username"
          type="text"
          placeholder="felix.maldonado"
        />

        <p>Contraseña</p>

        <input
          v-model="password"
          type="password"
          placeholder="********"
        />

        <br /><br />

        <button type="submit">Ingresar al Sistema</button>
      </form>

      <p v-if="errorMessage">
        {{ errorMessage }}
      </p>
    </div>

    <!-- PANEL -->
    <div v-else style="text-align: center">
      <h1>Panel de Almacén Activo</h1>

      <button @click="handleLogout">Salir</button>

      <div
        style="
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
        "
      >
        <div
          v-for="p in listaProductos"
          :key="p.id"
          style="
            border: 1px solid gray;
            border-radius: 10px;
            width: 220px;
            padding: 10px;
            text-align: center;
          "
        >
          <img
            :src="p.imagen"
            :alt="p.nombre"
            style="
              width: 100%;
              height: 150px;
              object-fit: cover;
              border-radius: 10px;
            "
          />

          <h3>{{ p.nombre }}</h3>

          <p>ID: {{ p.id }}</p>

          <p>Bs. {{ p.precio }}</p>

          <p>Stock: {{ p.stock }} piezas</p>

          <div
            style="
              display: flex;
              justify-content: center;
              gap: 10px;
            "
          >
            <button @click="aumentarStock(p)">+</button>

            <button @click="disminuirStock(p)">-</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>