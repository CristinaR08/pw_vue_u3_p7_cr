
import axios from 'axios';

const obtenerPorId = (id) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas
    axios.get(`http://localhost:8080/matriculaAPI/v1.1/personas/${id}`).then(r => r.data);
    console.log(data);
    return data;
}

export const obtenerPersonaIDFachada = async(id) => {
    return await obtenerPorId(id);
}


