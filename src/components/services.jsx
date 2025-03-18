import { IKImage } from 'imagekitio-react';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const Services = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const cardRefs = useRef([]);

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: false }); // Cambiar 'once' a false
  const titleControls = useAnimation();

  useEffect(() => {
    if (titleInView) {
      titleControls.start({ opacity: 1, y: 0, scale: 1 });
    }
  }, [titleInView]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        flippedCard !== null &&
        cardRefs.current[flippedCard] &&
        !cardRefs.current[flippedCard].contains(event.target)
      ) {
        setFlippedCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [flippedCard]);

  const toggleCard = (index) => {
    setFlippedCard((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      name="services"
      className="py-20 bg-white relative z-10 min-w-screen"
    >
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Nuestros Servicios
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => {
          const cardRef = useRef(null);
          
          const isFlipped = flippedCard === index;

          return (
            <motion.div
              key={service.title}
              ref={(el) => {
                cardRefs.current[index] = el;
                cardRef.current = el;
              }}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-80 h-40 sm:w-120 sm:h-60 mx-auto"
              onClick={() => toggleCard(index)}
            >
              <motion.div
                className="relative w-full h-full cursor-pointer transition-transform duration-100 hover:scale-105"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute w-full h-full shadow-md rounded-xl overflow-hidden">
                  <IKImage
                    path={service.img}
                    className="w-full h-full object-cover rounded-xl"
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-xl" />
                  <div className="absolute top-25 left-2 sm:top-46 sm:left-5 text-white text-sm">
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                    Imagen de{' '}
                    <a
                      href={service.reference}
                      className="text-white text-sm underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Freepik
                    </a>
                  </div>
                </div>

                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white shadow-md rounded-xl p-6 flex flex-col justify-center">
                  <h2 className="text-xl font-semibold mb-4 text-center">
                    {service.title}
                  </h2>
                  <ul className="list-disc text-gray-700 text-left text-sm pl-5">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const services = [
  {
    title: 'Trastornos del Lenguaje',
    reference:
      'https://www.freepik.es/foto-gratis/nina-sosteniendo-papel-letra-logopedia_18682927.htm',
    points: [
      'Disfasia',
      'Afasia',
      'Retraso del lenguaje',
      'Trastorno semántico-pragmático',
      'Multismo selectivo',
    ],
    img: 'cartel.jpg',
  },
  {
    title: 'Trastornos del Habla',
    reference:
      'https://www.freepik.es/foto-gratis/disposicion-diferentes-letras-sesiones-logopedia_18682910.htm',
    points: [
      'Disglosia, Dislalia, Disartria',
      'Dispraxia verbal',
      'Trastornos en la fluidez',
      'Disfemia, Taquifemia, Bradifemia',
      'Farfulleo',
    ],
    img: 'cartas.jpg',
  },
  {
    title: 'Trastornos Auditivos y de la Voz',
    reference:
      'https://www.freepik.es/foto-gratis/nino-pequeno-lindo-vista-frontal-vestido-rosa-susurrando-algo_9990825.htm',
    points: [
      'Hipoacusia',
      'Audífonos - implante coclear',
      'Afonía',
      'Disfonía',
    ],
    img: 'oido.jpg',
  },
  {
    title: 'Dificultades de Aprendizaje',
    reference:
      'https://www.freepik.es/foto-gratis/cabrito-alfabetos-coloridos_26677064.htm',
    points: ['Dislexia', 'Disortografía', 'Disgrafía', 'Discalculia'],
    img: 'letras.jpg',
  },
  {
    title: 'Dificultades en la Alimentación',
    reference:
      'https://www.freepik.es/foto-gratis/nina-comiendo-fruta_12233809.htm',
    points: ['Desglución disfuncional', 'Deglución atípica'],
    img: 'comida.jpg',
  },
  {
    title: 'Trastornos del Neurodesarrollo',
    reference:
      'https://www.freepik.es/foto-gratis/vista-superior-ninos-no-binarios-jugando-juego-colorido_11385756.htm#query=autismo&position=27&from_view=search&track=sph',
    points: [
      'Trastorno del desarrollo intelectual',
      'Trastorno de la comunicación',
      'Trastorno del espectro autista',
    ],
    img: 'gafas.jpg',
  },
];
