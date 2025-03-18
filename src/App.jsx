import { IKContext } from 'imagekitio-react';
import './App.css';
import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { Services } from './components/services';
import SmoothScroll from 'smooth-scroll';

function App() {
  const IMAGEKIT_ENDPOINT = 'https://ik.imagekit.io/2ljl3qha5/crearm/crearm';

  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
    header: '[data-scroll-header]',
  });

  return (
    <IKContext urlEndpoint={IMAGEKIT_ENDPOINT}>
      <Navigation />
      <Hero />
      <Services />
    </IKContext>
  );
}

export default App;
