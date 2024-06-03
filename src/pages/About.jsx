import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <div>
      <SectionTitle title="Acerca de Nosotros" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
      <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">Estamos encantados de ayudarte!</h2>
      <img src={logo} alt="Logo de la Empresa" style={{ width: '250px', height: 'auto', margin: '0 auto' }} />
      <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
        En Z Shop, nos dedicamos a ofrecer productos de alta calidad y un servicio al cliente excepcional. 
        Con años de experiencia en el mercado, entendemos lo importante que es la confianza y el servicio personalizado para 
        nuestros clientes. Ya sea que estés buscando lo último en tendencias de moda o clásicos atemporales, estamos aquí para 
        ayudarte a encontrar lo que necesitas. ¡Visítanos y experimenta la diferencia!
      </p>
      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">CONTACTANOS</Link>
      </div>
    </div>
  );
};

export default About;
