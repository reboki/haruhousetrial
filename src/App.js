import { Gallery } from "./components/organisms/Gallery";
import { Header } from "./components/organisms/header";
import { PropertyInfo } from "./components/organisms/PropertyInfo";
import { ReservationSection } from "./components/organisms/ReservationSection";
import { Footer } from "./components/organisms/Footer";

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Gallery />
        <PropertyInfo />
        <ReservationSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
