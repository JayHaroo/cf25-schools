import "./App.css";
import { StickyNavbar } from "./comp/stickyNavbar.jsx";
import { SimpleCard } from "./comp/cards.jsx";
import purdue from "./assets/purdue.jpg";
import unlv from "./assets/unlv.jpg";
import duke from "./assets/duke.jpg";
import logo from "./assets/logo.png";
import lsu from "./assets/lsu.jpg";

function App() {
  return (
    <div className="bg-black w-screen min-h-screen">
      <StickyNavbar logo={logo} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <SimpleCard
          link={purdue}
          name="Purdue Boilermakers"
          desc="Purdue plays its home games at Ross-Ade Stadium on the campus of Purdue University in West Lafayette, Indiana."
        />
        <SimpleCard
          link={unlv}
          name="UNLV Rebels football"
          desc="The UNLV Rebels football program is a college football team that represents the University of Nevada, Las Vegas."
        />
        <SimpleCard
          link={duke}
          name="Duke Blue Devils football"
          desc="The Duke Blue Devils football team represents Duke University in the sport of American football."
        />
        <SimpleCard
          link={lsu}
          name="LSU Tigers football"
          desc="The LSU Tigers football program, also known as the Fighting Tigers, represents LSU in college football."
        />
      </div>
    </div>
  );
}

export default App;
