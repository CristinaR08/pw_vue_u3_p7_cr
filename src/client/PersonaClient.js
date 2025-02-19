
import axios from 'axios';

const obtenerPorId = async (id) => {
    const response = await axios.get(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`);
    return response.data;

}

const insertar = async (body) => {
    axios.post(`http://localhost:8081/matriculaAPI/v1.1/personas`, body).then(r => r.data);

}

const actualizar = async (id, body) => {
    const response = axios.put(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, body);
    return response.data;
}


const actualizarParcial = async (id, body) => {
    const response = axios.patch(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, body);
    return response.data;
}

const borrar = async(id) =>{
    const response = axios.delete(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`);
    return response.data;    
}



export const obtenerPersonaIDFachada = async (id) => {
    return await obtenerPorId(id);
}

export const insertarFachada = async (body) => {
    await insertar(body);
}

export const actualizarFachada = async (id, body) =>{
    return await actualizar(id, body);
}

export const actualizarParcialFachada = async (id, body) =>{
    return await actualizarParcial(id, body);
}

export const borrarFachada = async (id) =>{
    await borrar(id);
}





