import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../index.css';

const NewPlayer = () => {
  return (
 
  <div className='form-container'>
    <h1>New Player</h1>
    <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="Enter Breed" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Status</Form.Label>
          <Form.Control type="text" placeholder="Enter Status" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="ImageUrl" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>TeamId</Form.Label>
          <Form.Control type="text" placeholder="TeamId" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  </div>
 

  )
}


export default NewPlayer;