import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">La mejor tienda de ropa en línea!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
          Descubre nuestra exclusiva selección de moda. 
          Con estilos que van desde lo clásico hasta lo contemporáneo, 
          garantizamos calidad y satisfacción en cada compra. 
          ¡Explora nuestras colecciones y encuentra tus nuevos favoritos hoy mismo!
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">¡COMPRA YA!</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero