import { Button, CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';
import './MovieCard.css'


function MovieCard({movie}) {
  const navigate=useNavigate() 
  return (
    <CardGroup style={{ width: '18rem' }}  className = 'MovieCard' >
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text> {movie.description} </Card.Text>
        <Card.Text> {movie.rate} </Card.Text>
         <ReactStars 
           size={28}
           half={false}
           edit ={false}
           count= {5}
           value= { movie.rate}
         />
         <Button onClick={()=> navigate(`/Details/${movie.id}`)}>Details</Button>

      </Card.Body>
    </CardGroup>
  );
}

export default MovieCard;