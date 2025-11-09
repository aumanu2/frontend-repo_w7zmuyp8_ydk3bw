import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CollectionGrid from "./components/CollectionGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <CollectionGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
