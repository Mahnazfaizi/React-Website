import React from 'react';
import Header from './components/Header';
import'./index.css';
import ArtiactCard from './components/ArtiactCard';

import artifact1Image from './assets/images/artifact1.png';
import artifact2Image from './assets/images/artifact2.png';
import artifact3Image from './assets/images/artifact3.png';

const artifacts = [
  {
    title: 'Ancient Pottery',
    image: artifact1Image,
    description:
      'Step back in time and admire the intricate craftsmanship of ancient pottery. Discover how civilizations across history used pottery for various purposes, from daily use to religious ceremonies.',
  },
  {
    title: 'Medieval Manuscripts',
    image: artifact2Image,
    description:
      'Unravel the secrets of medieval manuscripts. Explore beautifully illustrated texts that were meticulously crafted by skilled scribes and illuminated with vibrant colors.',
  },
  {
    title: 'Egyptian Hieroglyphs',
    image: artifact3Image,
    description:
      'Decode the mysteries of Egyptian hieroglyphs. Journey into the world of ancient Egypt and learn about the hieroglyphic writing system used to record their rich history and culture.',
  },
];

function App() {
  return (
    <div className="app">
     <Header image={artifacts[0].image}></Header>
      <div className="artifacts-container">
       {artifacts.map((artifact)=>(
      <ArtiactCard title={artifact.title} image={artifact.image} description={artifact.description}></ArtiactCard>
       ))}
      </div>
    </div>
  );
}

export default App;


