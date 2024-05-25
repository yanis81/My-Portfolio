import { MacbookScrollgo } from "./components/MacbookScrollgo";
import { CarouselDemo} from "./components/carousel";

import { LampDemo } from "./components/ui/lamp";


export default function Home() {
  return (
    <div>
      <header>
        <MacbookScrollgo/>  
      </header>
      
      <main>
        <LampDemo/> {/*section et H1 intégrer a la function */}
        <CarouselDemo/>
      </main>
    </div>
      
    

  );
}
