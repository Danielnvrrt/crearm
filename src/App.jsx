import { IKContext } from 'imagekitio-react';
import './App.css';
import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { Services } from './components/services';

function App() {
  const IMAGEKIT_ENDPOINT = 'https://ik.imagekit.io/2ljl3qha5/crearm/crearm';
  return (
    <IKContext urlEndpoint={IMAGEKIT_ENDPOINT}>
      <Navigation />
      <Hero />
      <Services />
    </IKContext>
  );
}

export default App;
