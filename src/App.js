
import logo from './logo.svg';
import './App.css';

import Button from '@restart/ui/esm/Button';
import { Form } from 'react-bootstrap';
function App() {
  const style = {
    color :'black',
    marginTop:'300px',
    marginLeft:'600px',
    display:'flex',
    flexDirection:'column',
    lineHight:'20px',
    backgroundColor:'white',
    width:'0 px',
    borderRadius:'10px',
    height:'300px',
    paddingTop:'100px'

  }
  return (
    <div className="App">

 <Form style = {style}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control style={{marginLeft:'25px'}} type="email" placeholder="Enter email" />
  

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button style={{color:'white', fontSize:'20px', width:'90px', height:'40px', marginTop:'20px', marginLeft:'100px', backgroundColor:'orange', outline:'none', border:'none'}} variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
