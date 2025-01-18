<template>
  <div class="options-container">
    <ul>
      <li @click="seleccionado" v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    pokemons:{
      type: Array,
      required: true,
    }
  },
  methods:{
    seleccionado(){
      console.log("hizo click ;3")
    }
  }
}
</script>

<style>

ul{
  list-style-type: none;
}

li{
  padding: 2px;
  background: white;
  width: 250px;
  margin-top: 10px;
  border-radius: 15px;
  border: 1px solid;
  cursor: pointer;
}

li:hover{
  background: rgba(0, 0, 0, 0.1);
}

.options-container{
  display: flex;
  justify-content: center;
}

</style>