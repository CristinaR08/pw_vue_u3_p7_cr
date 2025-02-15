<template>
    <h1>Bienvenidx :3</h1>
    <div class="container">
        <div class="form-group">
            <label for="id">Id:</label>
            <input v-model="id" type="text" id="id">
        </div>
        <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre">
        </div>
        <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" v-model="apellido">
        </div>
        <div class="form-group">
            <label for="fechaNacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="fechaNacimiento" v-model="fechaNacimiento">
        </div>
        <div>
            <button type="submit" @click="consultar()">Consultar</button>
        </div>
        <div>
            <button type="submit" @click="guardar()">Guardar</button>
        </div>
    </div>

</template>

<script>
import { obtenerPersonaIDFachada, insertarFachada } from '@/client/PersonaClient';

//import {obtenerPorIdFachada} from "../client/PersonaClient"

export default {
    data() {
        return {
            id: '',
            nombre: '',
            apellido: '',
            fechaNacimiento: ''
        }
    },
    mounted() { //cargar apenas se monta
        console.log("antes de llamar al API")
        obtenerPersonaIDFachada(2);
    },

    methods: {
        async consultar() {
            const data = await obtenerPersonaIDFachada(this.id);
            this.nombre = data.nombre;
            this.apellido = data.apellido;
            this.fechaNacimiento = data.fechaNacimiento;
            console.log(data);
        },

        async guardar() {
            const bodyPersona = {
            nombre: this.nombre,
            apellido: this.apellido,
            fechaNacimiento: this.fechaNacimiento,
            }
            try {
            await insertarFachada(bodyPersona);
            console.log("Persona guardada exitosamente");
            } catch (error) {
            console.error("Error al guardar la persona:", error);
            }
        },
    }
}
</script>

<style>
.formulario {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}
</style>