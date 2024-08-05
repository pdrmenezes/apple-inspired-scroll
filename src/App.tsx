import { ParallaxSection } from "./components/ParallaxSection";
import { ExampleContent } from "./components/ExampleContent";

const images = [
  "https://images.unsplash.com/photo-1721332153521-120cb0cd02d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1722648404006-1197d5c0b51f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1719937206589-d13b6b008196?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
];

function App() {
  return (
    <div className="scroll-smooth">
      <ParallaxSection
        imgUrl={images[0]}
        heading={"Built for all of us."}
        subheading={"Collaborate"}
      >
        <ExampleContent />
      </ParallaxSection>
      <ParallaxSection
        imgUrl={images[1]}
        heading={"Never compromise."}
        subheading={"Quality"}
      >
        <ExampleContent />
      </ParallaxSection>
      <ParallaxSection
        imgUrl={images[2]}
        heading={"Dress for the best."}
        subheading={"Modern"}
      >
        <ExampleContent />
      </ParallaxSection>
    </div>
  );
}

export default App;

("");
