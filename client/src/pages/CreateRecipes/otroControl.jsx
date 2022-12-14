import React from "react";
import { 
    Input, 
    Label, 
    GrupoInput, 
    LeyendaError, 
    IconoValidacion 
} from '../elementos/Formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
//Este componente se creó para hacer los Inputs reutilizables


const ComponenteInput = ({ name, estado, label, cambiarEstado, tipo, placeholder, leyendaError, expresionRegular, funcion }) => {
    //El 'ComponenteInput' tenía el mismo nombre que el 'Input' del Styled Components importado en la línea 3, por eso debí cambiar el nombre, el navegador no ejecutab la app

    //Fn que setea cada uno de los estados del 'Local State' en la propiedad 'campo'
    const onChange = (e) => {                                                           //Este componente recibe el estado con sus propiedades 'campo' y 'valido'
        cambiarEstado({ ...estado, campo: e.target.value });                            //Trae todo del estado y al 'campo' lo setea con el valor del input
    };

    //Fn que ejecuta y setea los tests de cada una de las expresiones regulares para el 'Local State' en la propiedad 'valido'
    const validacion = () => {
        if (expresionRegular) {                                                         //Pregunta si hay expresión regular, porque no todos los inputs la necesitan
            if (expresionRegular.test(estado.campo)) {                                  //Con el método 'test()' podemmos comparar la expresión regular con el valor del estado
                cambiarEstado({ ...estado, valido: 'true' });                           //El true debe ser un string debido a que Styled Components no puede leer valores booleanos
                //'cambiarEstado' es una prop que usamos para setear 'campo' y 'valido' en cada uno de los estados en el 'Local State'
            } else {
                cambiarEstado({ ...estado, valido: 'false' });
            }
        };
        //función() es la fn que compara la contraseña y su confirmación
        if (funcion) {
            funcion();
        };
    };


    return (
        <div>
            {/*Esta es la sección de 'labels' e 'inputs'*/}
            <Label htmlFor={ name } valido={ estado.valido }>{ label }</Label>          {/*El 'htmlFor' es el 'for' de esa etiqueta en HTML, 'for' ya es una palabra reservada de JS, por lo que se debe de cambiar. También le pasamos el 'estado.valido' para que cambie de color, 'rojo' si hay error y 'verde' si es correcta la validación*/}
            <GrupoInput>                                                                {/*Este es un componente personalizado*/}
                {/*Este div debe de tener un posicionamiento relativo para poder usar el posicionamiento absoluto del componente FontAwesomeIcon, el ícono queda afuera del input, por eso este debe de tener posicionamiento absoluto para ubicarlo*/}
                <Input 
                    type={ tipo } 
                    placeholder={ placeholder } 
                    id={ name }
                    value={ estado.campo }
                    onChange={ onChange }
                    onKeyUp={ validacion }
                    onBlur={ validacion }
                    valido={ estado.valido }
                />
                {/*'onKeyUp' se ejecuta cuando soltamos la tecla */}
                {/*'onBlur' es cuando se da click afuera del input, se ejecuta la función para mostrar el error*/}
                {/*La prop 'valido' arroja el feedback al usuario si hay errores en el input o no*/}
                {/*'valido={estado.valido}' hace cambiar de color al input y al label, dependiendo de si hay error o si es correcto*/}

				<IconoValidacion 
					icon={ estado.valido === 'true' ? faCheckCircle : faTimesCircle }
					valido={ estado.valido }
				/>
                {/*Para darle estilos, lo debo de importar de  Formularios.js*/}
                {/*Para este ejercicio, el ícono erá dentro del input, se hace con posicionamiento absoluto, pero ambos debes de estar dentro de un mismo div*/}
                {/*El 'icon' tiene un ternario, si es verdadero carga el ícono de correcto y si es 'false' carga el ícono de error */}
            </GrupoInput>
            <LeyendaError valido={ estado.valido }>{ leyendaError }</LeyendaError>
        </div>
    );
};


export default ComponenteInput;