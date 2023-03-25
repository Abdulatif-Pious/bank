
import { Hero, Features, Product, Clients } from './sections';
import { Navbar, Footer } from './components';

function App() {
  return (
    <div className='bg-primary-color min-h-screen overflow-y-auto'>
      <div className="w-full 2xl:max-w-[1280px] mx-auto">
        <Navbar />

        <Hero />
        <Features />
        <Product />
        <Clients />

        <Footer />
      </div>
    </div>
  )
}

export default App
