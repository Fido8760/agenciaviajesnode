import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    //validar

    const { nombre, correo, mensaje} = req.body;
    const errores = []

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El Nombre no puede ir vacío'});
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El Correo no puede ir vacío'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El Mensaje no puede ir vacío'});
    }
    
    if(errores.length > 0) {
        const testimoniales = await Testimonial.findAll();

        //mostrar vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        //almacenar en la bd


        try {

            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
            
        } catch (error) {
            console.log(error);
        }

    }
}

export {
    guardarTestimonial
}