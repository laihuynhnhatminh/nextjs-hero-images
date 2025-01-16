import Container from './Container';

export default function Footer() {
  return (
    <footer className="mb-8 mt-6">
      <Container className="flex justify-between gap-4">
        <p>HeroImageShowcase &copy; {new Date().getFullYear()}</p>
        <p>
          Created for the sake of learning by Himemiya Cafe (Minh Lai Huynh
          Nhat)
        </p>
      </Container>
    </footer>
  );
}
