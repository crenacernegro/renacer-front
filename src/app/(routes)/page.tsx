import Slideshow from "../components/slider";
import Container from "../components/ui/container";
import Gestion from "../components/gestion";
import Sentencia from "../components/sentencia";

export default function Home() {
  return (
    <Container>
      <Slideshow />
      <Gestion />
      <Sentencia />
    </Container>
  );
}
