import animales from '../assets/Json/animales.json'

export const getAnimales = () => {
    const animal = animales;
    return animal;
}

export const getDisponibles = () => {
    const disponible = getAnimales().filter(a => a.estado === 'Disponible');
    return disponible;
}

export const getMuertos = () => {
    const morto = getAnimales().filter(a => a.estado === 'Perdida');
    return morto;
}


export const getAdoptados = () => {
    const adoptados = getAnimales().filter(a => a.estado === 'Adoptado');
    return adoptados;
}
