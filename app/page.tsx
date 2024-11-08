import { MacbookScrollgo } from "./components/MacbookScrollgo";
import { H2carousel } from "./components/H2carousel"
import { Ipad } from "./components/ipad";
import { LampDemo } from "./components/ui/lamp";
import { ProjetComp } from "./components/projet";
import { BasDePage } from "./components/basDePage";
import {TimelineParcour} from "./components/TimelineParcours"

export default function Home() {
  return (
    <div>
      <header>
        <MacbookScrollgo />
      </header>
      <main>
        <LampDemo /> {/*section et H1 intégrer a la function et le text presentation*/}
        <TimelineParcour/> {/*section intégrer*/}
        <H2carousel /> {/*section a la function*/}
        <Ipad /> {/*section intégrer*/}
        <ProjetComp /> {/*section intégrer*/}
      </main>
      <footer>
        <BasDePage/>
      </footer>
    </div>
  );
}
