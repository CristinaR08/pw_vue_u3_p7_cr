
import axios from 'axios';

const obtenerPorId = async (id) => {
    const response = await axios.get(`http://localhost:8080/matriculaAPI/v1.1/personas/${id}`);
    return response.data;
}

// const crearPersona = async (persona) => {
//     const response = await axios.post('http://localhost:8080/matriculaAPI/v1.1/personas', persona);
//     return response.data;
// }

// const actualizarPersona = async (id, persona) => {
//     const response = await axios.put(`http://localhost:8080/matriculaAPI/v1.1/personas/${id}`, persona);
//     return response.data;
// }

// const modificarPersona = async (id, persona) => {
//     const response = await axios.patch(`http://localhost:8080/matriculaAPI/v1.1/personas/${id}`, persona);
//     return response.data;
// }

// const eliminarPersona = async (id) => {
//     const response = await axios.delete(`http://localhost:8080/matriculaAPI/v1.1/personas/${id}`);
//     return response.data;
// }

export const obtenerPersonaIDFachada = async (id) => {
    return await obtenerPorId(id);
}

// export const crearPersonaFachada = async (persona) => {
//     return await crearPersona(persona);
// }

// export const actualizarPersonaFachada = async (id, persona) => {
//     return await actualizarPersona(id, persona);
// }

// export const modificarPersonaFachada = async (id, persona) => {
//     return await modificarPersona(id, persona);
// }

// export const eliminarPersonaFachada = async (id) => {
//     return await eliminarPersona(id);
// }


