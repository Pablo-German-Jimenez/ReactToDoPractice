import ListGroup from 'react-bootstrap/ListGroup';
import ItemsTarea from './ItemsTarea';

const ListaTarea = ({tareasProps,borrarTarea}) => {
  return (
    <div>
      <ListGroup className='border border-danger'>
        {
          tareasProps.map((tareaMap,indice)=><ItemsTarea key={indice} desdeListaTarea={tareaMap} borrarTarea={borrarTarea}/>)
        }
      
      </ListGroup>
    </div>
  );
};

export default ListaTarea;
