import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => { //req - lo que enviamos : res - lo que responde express
    const promise_DB = [];
    promise_DB.push(Viaje.findAll({limit: 3}));
    promise_DB.push(Testimonial.findAll({limit: 3}));
    //consultar tres viajes del modelo viaje
    try {
        const resultado = await Promise.all(promise_DB);
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res) => {   
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => { 
    //consultar bd
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => { 
    try {

        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
        
    } catch (error) {
        console.log(error)
    }

}

//muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({where : {slug}});
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
        
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}