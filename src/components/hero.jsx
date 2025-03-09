import { IKImage } from 'imagekitio-react';

export const Hero = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Imagen fija en el fondo */}
      <div className="fixed inset-0 -z-10">
        <IKImage path="cover2.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido sobre la imagen */}
      <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Empowering Communication
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Professional speech therapy services to help you or your loved ones communicate with confidence
        </p>
        <a
          href="#contact"
          className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors"
        >
          Book a Consultation
        </a>
      </div>
    </div>
  );
};
