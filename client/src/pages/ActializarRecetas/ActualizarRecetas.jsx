import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateRecipe } from '../../redux/actions/index';
import BackTotopButton from "../../components/scroll/BackTotopButton";      //Scroll bar ejemplo 2


function validate (input) {                                                 //Función validadora, el 'input' es el Local State
    let errors = {};
    //Validamos 'name'
    if(!input.name){
        errors.name = "El nombre de la receta es requerido";
    } else if(/[.!@#$%^&*()_+-=]/.test(input.name)){
        errors.name = "El nombre no puede tener números o caracteres especiales";
    }

    //Validamos 'summary'
    if(!input.summary){
        errors.summary = "El resumen de la receta es requerido.";
    }

    //Validamos 'health_Score'
    if(!/[0-9]/.test(input.health_Score)){
        errors.health_Score = "El puntaje de Salud tiene que ser un numero";
    } else if(parseInt(input.health_Score) > 100){
        errors.health_Score = "El puntaje debe que ser igual o menor que 100";
    } else if(parseInt(input.health_Score) < 1){
        errors.health_Score = "El puntaje debe que mayor a 1";
    }
    return errors;                                      //Se retorna errors, esto muestra en pantalla el mensaje
};


export default function ActualizarRecetas() {
    const { id } = useParams();
    console.log('Este es el ' + id);
    const dispatch = useDispatch();                     //Traigo dispatch xq voy a despachar una action
    const [ errors, setErrors ] = useState({});         //Se crea un estado local para guardar el valor de la validación, es un obj vacío

    //Local State donde guardaré los eventos para poderlos enviar
    const [ input, setInput ] = useState({              //Es el Local State
        id: id,
        name: '',
        summary: '',
        health_Score: '',
        image: '',
        instructions: '',
        diets: []                                       //'diets' va a ser un array, xq cada receta puede tener varias diets
    });


    //Es el handler para los inputs de los atributos en la tabla 'Recipes'
    function handlerChange(e) {                         //Es para el valor de los inputs que tienen los atributos del model 'Country'. Cada que se ejecute esta función
        // console.log(e.target.value);
        setInput({                                      //LLamamos al estado input
            ...input,                                   //Tomamos todo lo que ya teniamos y además de lo que tiene...
            [e.target.name] : e.target.value            //Según lo que modifique el input, agrege ese 'e.target.value' como valor del [e.target.name], este 'name' en el 'e.target.name', es el atributo del 'input', y como en el input puse neme='name', name='nickname', name='birthday', etc, entonces modificará la propiedad respectiva del estado.
        });
        setErrors(validate({                            //Una vez hecho lo anterior, seteamos el estado 'errors' aplicando la variable 'validate'
            ...input,                                   //Hacemos una copia para no pisar el estado input
            [e.target.name] : e.target.value            //Con lo que llegue del [e.target.name] : e.target.value
        }));
        // console.log(input);
    };


    //Fn que setea en el Local State en el diets
    function handlerCheck(e) {                           //Como las diets es un checkbox, usaremos el target.checked
        if (e.target.checked) {                          //Si hay checked de diets
            setInput({
                ...input,                                //Traemos todo lo que hasta el momento está guardado en el input
                diets: e.target.value                    //Y seteamos el status con el e.target.value
            });
        };
    };


    //Fn para enviar el formulario cuando damos click en el botón enviar
    function handlerSubmit(e) {  
        // console.log(input)
        //Es para actualizar el formulario cuando se le de click al botón
        e.preventDefault();                             //Como es un botón que enviará algo, recarga todo el formulario, con esto inpedimos que suceda eso
        dispatch(updateRecipe( id, input));             //Despachamos la fn de la action que crea el personaje en la DB, pasamos todo lo contenido en el estado 'input'
        alert('Receta actualizada.');                   //Enviamos un mensaje de alguna manera que le indique que el personaje fue creado
        setInput({                                      //Recetea los estados 
            name: '',
            summary: '',
            health_Score: '',
            instructions: '',
            image: '',
            diets: ""
        });
        // Después de enviar la información, deseleccionamos todos los checkboxes
        const checkboxes = document.querySelectorAll('.containerSelectDiets2 input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
    };


    return (
        <div className="containerCreateRecipes">
            <form className="formularioCreateRecipes" onSubmit={(e) => handlerSubmit(e)}>
                <h1 className="tituloCreateRecipes">Modifica tu receta!</h1>
                <div className="containerInputsCreate">
                    <div className="ancholeyecda">
                        <label className="labelCreateRecipes">Name</label>
                        <input className="inputCreateRecipes" type="name" value={ input.name } name='name' placeholder="Name of your recipe" onChange={(e) => handlerChange(e)} />
                    </div>
                    {errors.name && <p className="danger">{ errors.name }</p>}

                    <div className="ancholeyecda">
                        <div className="labelCreateRecipes">Health Score</div>
                        <input className="inputCreateRecipes" type="number" value={ input.health_Score } min='0' max='100' name='health_Score' placeholder="Give your recipe a health score" onChange={(e) => handlerChange(e)} />
                    </div>
                    {errors.health_Score && <p className="danger">{ "\n"+errors.health_Score }</p>}
                    <div className="ancholeyecda">
                        <div className="labelCreateRecipes">Imagen</div>
                        <input className="inputCreateRecipes" type="text" value={ input.image } name='image' placeholder="Link to your recipe image" onChange={(e) => handlerChange(e)} />
                    </div>
                </div>

                <div className="containerSelectDiets">
                    <h1>Please, select the diets of your recipe</h1>
                    <div className="containerSelectDiets2">
                        <div className="containerInputSelect">
                            <label>Gluten Free</label>
                            <input className="inputCheckboxSelectDiets" type="checkbox" value='gluten free' name='gluten free' onChange={(e) => handlerCheck(e)} />
                        </div>
                        <div className="containerInputSelect">
                            <label>Ketogenic</label>
                            <input className="inputCheckboxSelectDiets" type="checkbox" value='ketogenic' name='ketogenic' onChange={(e) => handlerCheck(e)} />
                        </div>
                        <div className="containerInputSelect">
                            <label>Vegetarian</label>
                            <input className="inputCheckboxSelectDiets" type="checkbox" value='vegetarian' name='vegetarian' onChange={(e) => handlerCheck(e)} />
                        </div>
                        <div className="containerInputSelect">
                            <label>Lacto Ovo Vegetarian</label>
                            <input className="inputCheckboxSelectDiets" type="checkbox" value='lacto ovo vegetarian' name='lacto ovo vegetarian' onChange={(e) => handlerCheck(e)} />
                        </div>
                        <div className="containerInputSelect">
                            <label>Vegan</label>
                            <input className="inputCheckboxSelectDiets" type="checkbox" value='vegan' name='vegan' onChange={(e) => handlerCheck(e)} />
                        </div>
                        <div className="containerInputSelect">
                            <label>Pescatarian</label>
                            <input className="inputCheckboxSelectDiets" type="checkbox" value='pescatarian' name='pescatarian' onChange={(e) => handlerCheck(e)} />
                        </div>
                        <div className="containerInputSelect">
                            <label>Paleo</label>
                            <input className="inputCheckboxSelectDiets" type="checkbox" value='paleo' name='paleo' onChange={(e) => handlerCheck(e)} />
                        </div>
                        <div className="containerInputSelect">
                            <label>Primal</label>
                            <input className="inputCheckboxSelectDiets" type="checkbox" value='primal' name='primal' onChange={(e) => handlerCheck(e)} />
                        </div>
                        <div className="containerInputSelect">
                            <label>Low Fodmap</label>
                            <input className="inputCheckboxSelectDiets" type="checkbox" value='low fodmap' name='low fodmap' onChange={(e) => handlerCheck(e)} />
                        </div>
                        <div className="containerInputSelect">
                            <label>Whole 30</label>
                            <input className="inputCheckboxSelectDiets" type="checkbox" value='whole 30' name='whole 30' onChange={(e) => handlerCheck(e)} />
                        </div>
                    </div>
                </div>

                <div className="containerSummaryCreate">
                    <div className="labelCreateRecipesSummary">Summary</div>
                    <div>
                        <textarea className="inputSummaryCreateRecipes" type="text" value={ input.summary } name='summary' placeholder="Enter your recipe summary" onChange={(e) => handlerChange(e)} />
                    </div>
                    {errors.summary && <p className="dangersummary">{ errors.summary }</p>}
                </div>

                <div className="containerInstruccionsCreate">
                    <div className="labelCreateRecipes">Instructions</div>
                    <div>
                        <textarea className="inputCreateRecipesInstrucciones" type="text" value={ input.instructions } name='instructions' placeholder="Enter the instructions" onChange={(e) => handlerChange(e)} />
                    </div>
                </div>

                <div>
                    {
                        !errors.name && input.name.length > 0 &&
                        !errors.summary && input.summary.length > 0 &&
                        !errors.health_Score && input.health_Score.length > 0 &&
                        !errors.image && input.image.length > 0 &&
                        !errors.instructions && input.instructions.length > 0 &&
                        !errors.diets && input.diets.length > 0
                        ? <button className="botonAprobadoCreate" id="Boton_AddRecipe" type="submit">Guardar</button> : <button className="botonDesaprobadoCreate" id="Boton_AddRecipe" type="submit" disabled>Guardar</button>
                    }
                    {/*Si no hay errores y el valor del input es mayor a 0 && , habilita el boón, de lo contrario botón en 'disabled'*/}
                </div>
            </form>
            {/* Scroll bar ejemplo 2 */}
            <BackTotopButton />
            <Link to='/home'> <button className="botonVolverHomecreateRecipes">Volver</button> </Link>
        </div>
    );
};