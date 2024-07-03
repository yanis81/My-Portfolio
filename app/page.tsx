import { MacbookScrollgo } from "./components/MacbookScrollgo";
import { H2carousel } from "./components/H2carousel"
import { Ipad } from "./components/ipad";
import { LampDemo } from "./components/ui/lamp";
import { ProjetComp } from "./components/projet";
import { BasDePage } from "./components/basDePage";

export default function Home() {
  return (
    <div>
      <header>
        <MacbookScrollgo />
      </header>
      <main>
        <LampDemo /> {/*section et H1 intégrer a la function et le text presentation*/}
        <H2carousel /> {/*section a la function  */}
        <Ipad />
        <ProjetComp />
      </main>
      <footer>
        <BasDePage/>
      </footer>
    </div>
  );
}
