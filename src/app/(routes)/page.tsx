import Slideshow from "../components/slider";
import Container from "../components/ui/container";
import Gestion from "../components/gestion";

export default function Home() {
  return (
    <Container>
      <Slideshow />
      <Gestion />
    </Container>
  );
}
