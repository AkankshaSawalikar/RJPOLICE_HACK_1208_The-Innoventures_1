import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./events.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Trendingevents() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png" />
        <Card.Body>
          <Card.Title><h3>Name</h3></Card.Title>
          <Card.Text>
            Officer 1
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png" />
        <Card.Body>
          <Card.Title><h3>Name</h3></Card.Title>
          <Card.Text>
            Officer 2
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png" />
        <Card.Body>
          <Card.Title><h3>Name</h3></Card.Title>
          <Card.Text>
            Officer 3
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Trendingevents;