import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Lomake() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Käyttäjätunnus:</Form.Label>
        <Form.Control type="text" placeholder="Käyttäjätunnus" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPlaintextPassword">
        <Form.Label>Salasana:</Form.Label>
        <Form.Control type="password" placeholder="Salasana" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPlaintextPassword">
      <Form.Label>Salasana uudelleen:</Form.Label>
        <Form.Control type="password" placeholder="Salasana uudelleen" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Tallenna
      </Button>
    </Form>
  );
}

export default Lomake;