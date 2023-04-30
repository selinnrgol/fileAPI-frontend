import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    // burada kaydolma işlemini gerçekleştir ve kullanıcı sayfasına yönlendir
    history.push('/user');
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            size="lg"
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            size="lg"
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
            size="lg"
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(event) => setConfirmPassword(event.target.value)} 
            required
          />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit">
          Register
        </Button>
        <Link to="/login" className="btn btn-link ml-2">
          Already have an account? Login
        </Link>
      </Form>
    </Container>
  );
};

export default Register;
