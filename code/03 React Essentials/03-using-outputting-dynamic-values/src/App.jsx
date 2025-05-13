import { useState } from 'react';

import {CORE_CONCEPTS} from './data.js';
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from './components/TabButton.jsx';


function App() {
  const [ selectedTopic, setSelectedTopic ] = useState("click");  /*always returns 2 elements */


  function HandleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>

            <CoreConcept {...CORE_CONCEPTS[1]}/>
            
            <CoreConcept 
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}/>

            <CoreConcept 
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}/>
          </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => HandleSelect("components")} >Components</TabButton>
            <TabButton onSelect={() => HandleSelect("jsx")} >JSX</TabButton>
            <TabButton onSelect={() => HandleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => HandleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>

      </main>
    </div>
  );
}

export default App;
