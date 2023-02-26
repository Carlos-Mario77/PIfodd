import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateRecipe } from '../../redux/actions/index';
import BackTotopButton from "../../components/scroll/BackTotopButton";


function validate (input) {
    let errors = {};
    //name
    if(!input.name){
        errors.name = "The name of the recipe is required";
    } else if(/[.!@#$%^&*()_+-=]/.test(input.name)){
        errors.name = "The name can't contain numbers or special characters";
    }
    //health_Score
    else if(!/[0-9]/.test(input.health_Score)){
        errors.health_Score = "The Health score must be numeric";
    } else if(parseInt(input.health_Score) > 100){
        errors.health_Score = "The score must be less than or equal to 100";
    } else if(parseInt(input.health_Score) < 1){
        errors.health_Score = "The score must be greater than 1";
    }
    //time
    else if(!/[0-9]/.test(input.time)){
        errors.time = "Time should be numerical and measured in minutes";
    }
    //servings
    else if(!/[0-9]/.test(input.servings)){
        errors.servings = "Servings should be given in number";
    }
    //cuisines
    else if(!input.cuisines){
        errors.cuisines = "The type of cuisines is required";
    } else if(/[.!@#$%^&*()_+-=]/.test(input.cuisines)){
        errors.cuisines = "The cuisines type must not have special characters";
    }
    //ingredients
    else if(!input.ingredients){
        errors.ingredients = "Los ingredientes de la receta son requeridos";
    }
    //summary
    else if(!input.summary){
        errors.summary = "The recipe ingredients are required";
    }
    //summary
    else if(!input.instructions){
        errors.instructions = "The recipe instructions is required";
    }
    return errors;
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
        health_Score: '',
        time: '',
        servings: '',
        image: '',
        diets: [],
        cuisines: '',
        ingredients: '',
        summary: '',
        instructions: ''
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
    };


    //Fn que setea en el Local State en el diets
    function handlerCheck(e) {                          //Como las diets es un checkbox, usaremos el target.checked
        if (e.target.checked) {                         //Si hay checked de diets
            setInput({
                ...input,                               //Traemos todo lo que hasta el momento está guardado en el input
                diets: e.target.value                   //Y seteamos el status con el e.target.value
            });
        };
    };


    //Fn para enviar el formulario cuando damos click en el botón enviar
    function handlerSubmit(e) {  
        // console.log(input)
        //Es para actualizar el formulario cuando se le de click al botón
        e.preventDefault();                             //Como es un botón que enviará algo, recarga todo el formulario, con esto inpedimos que suceda eso
        dispatch(updateRecipe( id, input));             //Despachamos la fn de la action que crea el personaje en la DB, pasamos todo lo contenido en el estado 'input'
        setInput({                                      //Recetea los estados 
            name: '',
            health_Score: '',
            time: '',
            servings: '',
            image: '',
            diets: [],
            cuisines: '',
            ingredients: '',
            summary: '',
            instructions: ''
        });
        // Después de enviar la información, deseleccionamos todos los checkboxes
        const checkboxes = document.querySelectorAll('.containerSelectDiets2 input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
    };


    return (
        <div className="containerCreateRecipes">
            <form className="formularioCreateRecipes" onSubmit={(e) => handlerSubmit(e)}>
            <h1>Update your Recipe!</h1>
                <div className="containerInputsCreate">
                    <div className="ancholeyecda">
                        <label className="labelCreateRecipes">Name</label>
                        <input className="inputCreateRecipes" type="name" value={ input.name } name='name' placeholder="Name of your recipe" onChange={(e) => handlerChange(e)} />
                        {errors.name && <p className="danger">{ errors.name }</p>}
                    </div>

                    <div className="ancholeyecda">
                        <label className="labelCreateRecipes">Health Score</label>
                        <input className="inputCreateRecipes" type="number" value={ input.health_Score } min='0' max='100' name='health_Score' placeholder="Give your recipe a health score" onChange={(e) => handlerChange(e)} />
                        {errors.health_Score && <p className="danger">{ "\n"+errors.health_Score }</p>}
                    </div>

                    <div className="ancholeyecda">
                        <label className="labelCreateRecipes">Time</label>
                        <input className="inputCreateRecipes" type="number" value={ input.time } name='time' placeholder="Time in minutes" onChange={(e) => handlerChange(e)} />
                        {errors.time && <p className="danger">{ "\n"+errors.time }</p>}
                    </div>

                    <div className="ancholeyecda">
                        <label className="labelCreateRecipes">Servings</label>
                        <input className="inputCreateRecipes" type="number" value={ input.servings } name='servings' placeholder="Servings in numbers" onChange={(e) => handlerChange(e)} />
                        {errors.servings && <p className="danger">{ "\n"+errors.servings }</p>}
                    </div>

                    <div className="ancholeyecda">
                        <label className="labelCreateRecipes">Imagen</label>
                        <input className="inputCreateRecipes" type="text" value={ input.image } name='image' placeholder="Link to your recipe image" onChange={(e) => handlerChange(e)} />
                    </div>
                </div>

                <div className="containerSelectDiets">
                    <h2>Please, select the diets of your recipe</h2>
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

                <div className="containertextareaSummary">
                    <h2>Summary</h2>
                    <textarea className="textareaSummary" type="text" value={ input.summary } name='summary' placeholder="Enter your recipe summary" onChange={(e) => handlerChange(e)} />
                    {errors.summary && <p className="dangersummary">{ errors.summary }</p>}
                </div>
                <div className="containertextareaSummary">
                    <h2>Cuisine</h2>
                    <textarea className="textareaSummary" type="text" value={ input.cuisines } name='cuisines' placeholder="Enter your recipe cuisine" onChange={(e) => handlerChange(e)} />
                    {errors.cuisines && <p className="dangersummary">{ errors.cuisines }</p>}
                </div>
                <div className="containertextareaSummary">
                    <h2>Ingredients</h2>
                    <textarea className="textareaSummary" type="text" value={ input.ingredients } name='ingredients' placeholder="Enter your ingredients" onChange={(e) => handlerChange(e)} />
                    {errors.ingredients && <p className="dangeringredients">{ errors.ingredients }</p>}
                </div>

                <div className="containertextareaSummary">
                    <h2>Instructions</h2>
                    <textarea className="textareaSummary" type="text" value={ input.instructions } name='instructions' placeholder="Enter the instructions" onChange={(e) => handlerChange(e)} />
                    {errors.instructions && <p className="dangeringredients">{ errors.instructions }</p>}
                </div>
                <div>
                    {
                        !errors.name && input.name.length > 0 &&
                        !errors.health_Score && input.health_Score.length > 0 &&
                        !errors.time && input.time.length > 0 &&
                        !errors.servings && input.servings.length > 0 &&
                        !errors.image && input.image.length > 0 &&
                        !errors.diets && input.diets.length > 0 &&
                        !errors.cuisines && input.cuisines.length > 0 &&
                        !errors.ingredients && input.ingredients.length > 0 &&
                        !errors.summary && input.summary.length > 0 &&
                        !errors.instructions && input.instructions.length > 0 ?
                        <button className="buttonCreate" type="submit">SAVE</button> : <button className="botonDesaprobadoCreate" type="submit" disabled>SAVE</button>
                    }
                </div>
            </form>
            <BackTotopButton />
            <Link to='http://localhost:3000/detail/da649645-ba91-4fa7-ade1-3c3e8f56b80a'> <button className="buttonGoBack">GO BACK</button> </Link>
        </div>
    );
};