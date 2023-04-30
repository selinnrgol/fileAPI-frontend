import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // burada giriş işlemini gerçekleştir ve kullanıcı sayfasına yönlendir
    history.push('/user');
  };

  const handleRedirect = () => {
    history.push('/user');
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            size="lg"
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
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
          />
        </Form.Group>
        <Button variant="info" size="lg" onClick={handleRedirect} className="ml-3">
          Send me to User page
        </Button>
        <Button variant="success" size="lg" type="submit">
          Login
        </Button>
        <div className="mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
        <Link to="/forgot-password" className="mt-2">Forgot Password?</Link>
      </Form>
    </Container>
  );
};

export default Login;
