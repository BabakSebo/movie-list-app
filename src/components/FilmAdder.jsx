import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { useState } from "react";

export default function FilmAdder({ addFilm }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFilm = { name, imageUrl, description, year, watched: false };
    addFilm(newFilm);
    setName("");
    setImageUrl("");
    setYear("");
    setDescription("");
  };

  return (
    <>
      <Container className="text-center">Add a Movie:</Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Poster URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
