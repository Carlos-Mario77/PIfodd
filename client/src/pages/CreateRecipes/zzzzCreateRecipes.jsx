import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postRecipes } from '../../redux/actions/index';


function validate (input) {                             //Función validadora, el 'input' es el Local State
    let errors = {};                                    //Creamos usn objeto vacío para guardar temporalmente los errores
    if(!input.name) {                                   //'input' es el Local State, y 'name' es el atributo que tiene asignado los valores de name, nickname, image, birthday e image, 'name' toma el valores de acerdo con lo que el usuario selecciona. Entonces, si no hay input.name
        errors.name = 'Se requiere un nombre.';         //En errors se guarda una propiedad 'name' cuyo valor es 'Se requiere un nombre'
    } else if (!input.summary) {                        //Si no hay 'nickname'
        errors.summary = 'Summary debe ser completado'  //En errors se guarda una propiedad 'nickname' cuyo valor es 'Nickname debe ser completado'
    };
    return errors;                                      //Se retorna errors, esto muestra en pantalla el mensaje
};


export default function RecipesCreate() {
    const dispatch = useDispatch();                     //Traigo dispatch xq voy a despachar una action
    const [ errors, setErrors ] = useState({});         //Se crea un estado local para guardar el valor de la validación, es un obj vacío

    //Local State donde guardaré los eventos para poderlos enviar
    const [ input, setInput ] = useState({              //Es el Local State
        name: '',
        summary: '',
        health_Score: '',
        image: '',
        instructions: '',
        diets: []                                       //'diets' va a ser un array, xq cada receta puede tener varias diets
    });

 
    //Es el handler para los inputs de los atributos en la tabla 'Recipes'
    function handlerChange(e) {                         //Es para el valor de los inputs que tienen los atributos del model 'Country'. Cada que se ejecute esta función
        console.log(e.target.value)
        setInput({                                      //LLamamos al estado input
            ...input,                                   //Tomamos todo lo que ya teniamos y además de lo que tiene...
            [e.target.name] : e.target.value            //Según lo que modifique el input, agrege ese 'e.target.value' como valor del [e.target.name], este 'name' en el 'e.target.name', es el atributo del 'input', y como en el input puse neme='name', name='nickname', name='birthday', etc, entonces modificará la propiedad respectiva del estado.
        });
        setErrors(validate({                            //Una vez hecho lo anterior, seteamos el estado 'errors' aplicando la variable 'validate'
            ...input,                                   //Hacemos una copia para no pisar el estado input
            [e.target.name] : e.target.value            //Con lo que llegue del [e.target.name] : e.target.value
        }));
        console.log(input);
    };

    //Fn que setea en el Local State en el diets
    function handlerCheck(e) {                           //Como las diets es un checkbox, usaremos el target.checked
        if (e.target.checked) {                         //Si hay checked de diets
            setInput({
                ...input,                               //Traemos todo lo que hasta el momento está guardado en el input
                diets: e.target.value                   //Y seteamos el status con el e.target.value
            });
        };
    };

    //Fn para enviar el formulario cuando damos click en el botón enviar
    function handlerSubmit(e) {                          //Es para enviar el formulario cuando se le de click al botón
        e.preventDefault();                             //Como es un botón que enviará algo, recarga todo el formulario, con esto inpedimos que suceda eso
        dispatch(postRecipes(input));                   //Despachamos la fn de la action que crea el personaje en la DB, pasamos todo lo contenido en el estado 'input'
        alert('Receta creada.')                         //Enviamos un mensaje de alguna manera que le indique que el personaje fue creado
        setInput({
            name: '',
            summary: '',
            health_Score: '',
            instructions: '',
            image: '',
            diets: []
        });
    };


    return (
        <div>
            <Link to='/home'> <button>Volver</button> </Link>
            <h1>Crea tu receta!</h1>
            <form onSubmit={(e) => handlerSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input 
                        type="name" 
                        value={ input.name } 
                        name='name' 
                        placeholder="Name of your recipe" 
                        onChange={(e) => handlerChange(e)} 
                    />
                    {errors.name && (
                        <p>{ errors.name }</p>
                    )}
                </div>
                <div>
                    <label>Summary</label>
                    <input type="text" value={ input.summary } name='summary' placeholder="Enter your recipe summary" onChange={(e) => handlerChange(e)} />
                    {errors.summary && (
                        <p>{ errors.summary }</p>
                    )}
                </div>
                <div>
                    <label>Health Score</label>
                    <input type="number" value={ input.health_Score } min='0' max='100' name='health_Score' placeholder="Give your recipe a health score" onChange={(e) => handlerChange(e)} />
                </div>
                <div>
                    <label>Imagen</label>
                    <input type="text" value={ input.image } name='image' placeholder="Link to your recipe image" onChange={(e) => handlerChange(e)} />
                </div>

                <div>
                    <label>Instructions: </label>
                    <input type="text" value={ input.instructions } name='instructions' placeholder="Enter the instructions" onChange={(e) => handlerChange(e)} />
                </div>




				
                <div>
                    <p><label>Please, select the diets of your recipe: </label></p>
                    <label> <input type="checkbox" value='gluten free' name='gluten free' onChange={(e) => handlerCheck(e)} />Gluten Free</label>{/**/}
                    <label> <input type="checkbox" value='ketogenic' name='ketogenic' onChange={(e) => handlerCheck(e)} />Ketogenic</label>
                    <label> <input type="checkbox" value='vegetarian' name='vegetarian' onChange={(e) => handlerCheck(e)} />Vegetarian</label>
                    <label> <input type="checkbox" value='lacto ovo vegetarian' name='lacto ovo vegetarian' onChange={(e) => handlerCheck(e)} />Lacto Ovo Vegetarian</label>
                    <label> <input type="checkbox" value='vegan' name='vegan' onChange={(e) => handlerCheck(e)} />Vegan</label>
                    <label> <input type="checkbox" value='pescatarian' name='pescatarian' onChange={(e) => handlerCheck(e)} />Pescatarian</label>
                    <label> <input type="checkbox" value='paleo' name='paleo' onChange={(e) => handlerCheck(e)} />Paleo</label>
                    <label> <input type="checkbox" value='primal' name='primal' onChange={(e) => handlerCheck(e)} />Primal</label>
                    <label> <input type="checkbox" value='low fodmap' name='low fodmap' onChange={(e) => handlerCheck(e)} />Low Fodmap</label>
                    <label> <input type="checkbox" value='whole 30' name='whole 30' onChange={(e) => handlerCheck(e)} />Whole 30</label>
                </div>

                <button type='submit'>Crear receta!</button>{/*Este botón sin tener algún handler, activa el evento 'handleSubmit' del form*/}
            </form>
        </div>
    );
};