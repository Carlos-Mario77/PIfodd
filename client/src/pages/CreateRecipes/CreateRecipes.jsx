import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postRecipes } from '../../redux/actions/index';


function validate (input) {                             //Función validadora, el 'input' es el Local State

    let errors = {};
    if(!input.name){
        console.log("Nombre es requerido")
        errors.name = "Nombre es requerido"
    } else if(/[.!@#$%^&*()_+-=]/.test(input.name)){
        errors.name = "Nombre no puede tener números o caracteres especiales"
    }

    if(!input.summary){
        errors.summary = "Resumen es requerido"
    }

    if(!/[0-9]/.test(input.health_Score)){
        errors.health_Score = "Puntaje de Salud tiene que ser un numero"
    } else if(parseInt(input.health_Score) > 100){
        errors.health_Score = "Tiene que ser igual o menor que 100"
    } else if(parseInt(input.health_Score) < 1){
        errors.health_Score = "Tiene que mayor a 1"
    }

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
                    <input type="name" value={ input.name } name='name' placeholder="Name of your recipe" onChange={(e) => handlerChange(e)} />
                    {errors.name && <p className="danger">{errors.name}</p>}
                </div>
                <div>
                    <label>Summary</label>
                    <input type="text" value={ input.summary } name='summary' placeholder="Enter your recipe summary" onChange={(e) => handlerChange(e)} />
                    {errors.summary && <p className="danger">{errors.summary}</p>}
                </div>
                <div>
                    <label>Health Score</label>
                    <input type="number" value={ input.health_Score } min='0' max='100' name='health_Score' placeholder="Give your recipe a health score" onChange={(e) => handlerChange(e)} />
                    {errors.health_Score && <p className="danger">{"\n"+errors.health_Score}</p>}
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
                    <label> <input type="checkbox" value='gluten free' name='gluten free' onChange={(e) => handlerCheck(e)} />Gluten Free</label>
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

                <div>
                    {
                        !errors.name && input.name.length > 0 && 
                        !errors.summary && input.summary.length > 0 &&
                        !errors.health_Score && input.health_Score.length > 0 &&
                        !errors.image && input.image.length > 0 &&
                        !errors.instructions && input.instructions.length > 0 &&
                        !errors.diets && input.diets.length > 0

                        ? <button id="Boton_AddRecipe" type="submit">Agregar</button> : <button id="Boton_AddRecipe" type="submit" disabled>Agregar</button>


                    }
                </div>
            </form>
        </div>
    );
};







// import React, { useEffect, useState } from "react";
// import {useDispatch, useSelector } from "react-redux";
// import { postRecipes, getRecipes, getDiets } from '../../redux/actions/index';

// export function validate(input, recetas){       //Recibe el estado 'input' y el 'recetas'
//     let errors = {};
//     if(!input.name){
//         console.log("Nombre es requerido")
//         errors.name = "Nombre es requerido"
//     } else if(/[.!@#$%^&*()_+-=]/.test(input.name)){
//         errors.name = "Nombre no puede tener números o caracteres especiales"
//     }

//     if(!input.summary){
//         errors.summary = "Resumen es requerido"
//     }

//     if(!/[0-9]/.test(input.health_Score)){
//         errors.health_Score = "Puntaje de Salud tiene que ser un numero"
//     } else if(parseInt(input.health_Score) > 100){
//         errors.health_Score = "Tiene que ser igual o menor que 100"
//     } else if(parseInt(input.health_Score) < 1){
//         errors.health_Score = "Tiene que mayor a 1"
//     }

//     if(!/[0-9]/.test(input.id)){
//         errors.id = "ID tiene que ser un numero"
//     } else if(recetas.find( rec => rec.id === "D"+input.id)){
//         console.log("ERROR")
//         errors.id = "ID ya existente"
//     }

//     return errors;
// };


// export default function RecipesCreate() {
//     const recetas = useSelector(state => state.filteredRecipes)
//     const dietTypes = useSelector(state => state.diets)
//     const dispatch = useDispatch()


//     //Al montar el componente, traigo todas las recetas creadas por el usuario y las dietas
//     useEffect(()=>{
//         dispatch(getRecipes())
//         dispatch(getDiets())
//     }, [dispatch]);


//     //Este estado se encarga de almacenar los datos de la nueva receta
//     const [ input, setInput ] = useState({
//         name: '',
//         summary: '',
//         health_Score: '',
//         image: '',
//         instructions: '',
//         diets: []    
//     });

//     const [ errors, setErrors ] = useState({}); //Este estado controla los errores del validate


//     //Esta funcion se encarga de crear un array de dietas que serán los vinculados a la dieta
//     const handleChangeArray = (e) =>{
//         let newDiet = e.target.value;
//         let diets = new Set([...input.diets]);      //Necesito un set para que se repitan las dietas
//         if(!diets.has(newDiet)){                    //Si este array no tiene la dieta, se la agrega sino, se elimina
//             diets.add(newDiet)
//         } else{
//             diets.delete(newDiet)
//         }

//         diets = Array.from(diets)
//         setInput({                                  //Lo seteo en el Input
//             ...input,
//             diets
//         });
//     };


//     //Este actualiza los datos del input y controla los errores
//     const handleChange = (e) => {
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value
//           })
//           setErrors(validate({
//             ...input,
//             [e.target.name]: e.target.value
//           }, recetas));
//     };


//     //Al aplicar los cambios, se la agrega a la base de datos
//     const handleSubmit = (e) => {
//         //console.log(input)
//         dispatch(postRecipes(input))  //'create_Recipe' es la action que crea la receta en la ruta post
//         alert("Receta Agregada")
//     };


//     //Crea las dietas con "checkboxes"
//     const createOptions = () => {
//         return dietTypes.map( (diets) => {
//             return(
//                 <div>
//                     <label htmlFor={diets.name}>{diets.name}</label>,
//                     <input type="checkbox" value={diets.name} name={diets.name} autoComplete="off" onChange={e => handleChangeArray(e)} />
//                 </div>
//             );
//         });
//     };

//     //----------------------------
//     return(
//         <div id="div_addForm">
//             <h1 id="tituloAddForm">Agrega una Receta!</h1>
//             <form id="formAdd" onSubmit={ e => handleSubmit(e)}>
//                 {/*Estos son los inputs y los labels*/}
//                 <div className="addRecipe_label">
//                     <label>Name*: </label>
//                     <input type="text" name="name" autoComplete="off" value={input.name} onChange={e => handleChange(e)} />
//                 </div>
//                 {errors.name && <p className="danger">{errors.name}</p>}

//                 <div className="addRecipe_label">
//                     <label>Summary*: </label>
//                     <input type="text" name="summary" autoComplete="off" value={input.summary} onChange={e => handleChange(e)} />
//                 </div>
//                 {errors.summary && <p className="danger">{errors.summary}</p>}

//                 <div className="addRecipe_label">
//                     <label>Health Score: </label>
//                     <input type="text" name="health_Score" autoComplete="off" value={input.health_Score} onChange={e => handleChange(e)} />
//                 </div>
//                 {errors.health_Score && <p className="danger">{"\n"+errors.health_Score}</p>}

//                 <div className="addRecipe_label">
//                     <label htmlFor="">Imagen (URL): </label>
//                     <input type="text" name="image" autoComplete="off" value={input.image} onChange={e => handleChange(e)} />
//                 </div>

//                 <div className="addRecipe_label">
//                     <label>Instructions: </label>
//                     <input type="text" name="instructions" autoComplete="off" value={input.instructions} onChange={e => handleChange(e)} />
//                 </div>

//                 {/*Este es el select de las dietas*/}
//                 <div>
//                     <p>Selecciona las dietas:</p>
//                     {createOptions()}
//                 </div>
                
//                 <div>
//                     {!errors.name && input.name.length > 0 && !errors.summary && input.summary.length > 0 ? <button id="Boton_AddRecipe" type="submit">Agregar</button> : <button id="Boton_AddRecipe" type="submit" disabled>Agregar</button>}
//                 </div>
//             </form>
//         </div>
//     );
// };