// Import : npm
import React, { useState, useEffect } from 'react';

// Import : src
import Button from './Button';
import ButtonHook from './ButtonHook';

// Composant
const App = () => {
    // const [ innerWidth, setInnerWidth ] = useState(window.innerWidth);

    // // componentdidmount ecoute du resize
    // useEffect(() => {
    //     const handleResize = () => {
    //         setInnerWidth(window.innerWidth);
    //     }
    //     window.addEventListener('resize', handleResize);

    //     // return optionnel : defini componentWillUnMount
    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // });

  const innerWidth = useInnerWidth();

  return (
  <div id="app">
    <section>
      innerWidth : { innerWidth }
    </section>
    <section>
      <p>Que pensez-vous de React sans les Hooks ?</p>
      <Button name="oui" />
      <Button name="bof" />
      <Button name="non" />
    </section>
    <section>
      <p>Que pensez-vous des Hooks ?</p>
      <ButtonHook name="oui" />
      <ButtonHook name="bof" />
      <ButtonHook name="non" />
    </section>
  </div>
)};

const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  // componentDidMount et componentDidUpdate
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    
    // return optionnel : défini componentWillUnmout
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return innerWidth;
}

// Export
export default App;