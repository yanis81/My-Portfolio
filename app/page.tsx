import { MacbookScrollgo } from "./components/MacbookScrollgo";
import { CarouselDemo} from "./components/carousel";
import { Ipad } from "./components/ipad";
import { LampDemo } from "./components/ui/lamp";
import { ProjetComp } from "./components/projet";


export default function Home() {
  return (
    <div>
      <header>
        <MacbookScrollgo/>  
      </header>
      
      <main>
        <LampDemo/> {/*section et H1 intégrer a la function */}
        <CarouselDemo/> {/*section a la function */}
        <Ipad/>
        <ProjetComp/>
      </main>
    </div>
      
    

  );
}
