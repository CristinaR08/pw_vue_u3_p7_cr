<template>
  <div class="options-container">
    <ul>
      <li>Opcion 1</li>
      <li>Opcion 2</li>
      <li>Opcion 3</li>
      <li>Opcion 4</li>
    </ul>
  </div>
</template>

<script>
export default {

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