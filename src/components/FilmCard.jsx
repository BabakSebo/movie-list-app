import { Card, Button } from "react-bootstrap";

export default function FilmCard({ film, updateWatched }) {
  const handleClick = () => {
    updateWatched(film);
  };
  return (
    <Card style={{ width: "23rem" }} className="bg-light mb-4">
      <Card.Header>{film.name}</Card.Header>
      <Card.Img variant="top" src={film.imageUrl} style={{ height: "32rem" }} />
      <Card.Body>
        <Card.Text>{film.description}</Card.Text>
        <Card.Text>{film.year}</Card.Text>
        <Button variant="secondary" onClick={handleClick}>
          {film.watched ? "Seen ✅" : "Watch 👀"}
        </Button>
      </Card.Body>
    </Card>
  );
}
