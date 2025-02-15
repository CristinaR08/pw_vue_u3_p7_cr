
import axios from 'axios';

const obtenerPorId = async (id) => {
    const response = await axios.get(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`);
    console.log(response.data);
    return response.data;

}

const insertar = async (body) => {
    axios.post(`http://localhost:8081/matriculaAPI/v1.1/personas`, body).then(r => r.data);

}

const actualizar = async (id, body) => {
    axios.put(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, body).then(r => r.data);
}

const actualizarParcial = async (id, body) => {
    axios.patch(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, body).then(r => r.data);
}

const brrar = async(id) =>{
    axios.delete(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r => r.data);    
}



export const obtenerPersonaIDFachada = async (id) => {
    return await obtenerPorId(id);
}

export const insertarFachada = async (body) => {
    await insertar(body);
}





