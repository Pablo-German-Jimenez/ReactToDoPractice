import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const FormularioTarea = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //para mostrar desde el principio un array vacio que esta en localStorage
  const tareasEnLocalStorage = JSON.parse(localStorage.getItem("tareasKey"))||[];

  //desestructuración para utilizar hooks del useState y controlar cambio de estados,mediante setTarea, se inicializa con variable de localstorage con un array vacio.
  const [tarea, setTarea] = useState(tareasEnLocalStorage);


  // useEfffect() hook para el ciclo de vida del componente, ahora guarda un string que debe ser un array 
  useEffect(() => {
    localStorage.setItem("tareasKey", JSON.stringify(tarea), [tarea]);
  });

  const onSubmit = (data) => {
    console.log(data.tarea);
    setTarea([...tarea, data.tarea]);
    reset();
  };

  const borrarTarea = (nombreTarea) => {
    const tareaFiltradas = tarea.filter(
      (itemTarea) => itemTarea !== nombreTarea
    );
    setTarea(tareaFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group
          className="mb-3 d-flex justify-content-between align-items-center"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="text"
            placeholder="Enter your task"
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 2,
                message: `Ingresar mas de 2 caracteres`,
              },
              maxLength: {
                value: 50,
                message: `Máximo hasta 50 caracteres`,
              },
            })}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
      <ListaTarea tareasProps={tarea} borrarTarea={borrarTarea}></ListaTarea>
    </section>
  );
};

export default FormularioTarea;
