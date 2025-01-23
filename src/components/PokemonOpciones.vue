<template>
  <div class="options-container">
    <ul>
      <li @click="seleccionado(pokemon.id)" v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
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
    seleccionado(id){
      console.log("hizo click ;3");
      console.log(id);
      const objetoEnviado={
        identificador: id,
        valor2: true,
        valor3: 'Ejemplo2'
      }
      this.$emit('seleccion', objetoEnviado); //mando un parametro que quiero enviar desde el hijo al padre
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