import { ListGroup, Button } from "react-bootstrap";

const ItemsTarea = ({desdeListaTarea,borrarTarea}) => {
  return (
    <ListGroup.Item className="border border-danger d-flex justify-content-between ">
      {desdeListaTarea}
      <Button variant="danger" onClick={()=>borrarTarea(desdeListaTarea)}>X</Button>
    </ListGroup.Item>
  );
};

export default ItemsTarea;
