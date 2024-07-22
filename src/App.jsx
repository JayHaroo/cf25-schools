import "./App.css";
import { StickyNavbar } from "./comp/stickyNavbar.jsx";
import { SimpleCard } from "./comp/cards.jsx";

function App() {
  return (
    <div className="bg-black w-screen min-h-screen">
      <StickyNavbar />
      <div className="flex pl-[20px] pr-[20px] justify-between">
        <SimpleCard
          link="src/assets/purdue.jpg"
          name="Purdue Boilermakers"
          desc="Purdue plays its home games at Ross-Ade Stadium on the campus of Purdue University in West Lafayette, Indiana."
        />

        <SimpleCard
          link="src/assets/unlv.jpg"
          name="UNLV Rebels football"
          desc="The UNLV Rebels football program is a college football team that represents the University of Nevada, Las Vegas."
        />

        <SimpleCard
          link="src/assets/duke.jpg"
          name="Duke Blue Devils football"
          desc="The Duke Blue Devils football team represents Duke University in the sport of American football."
        />
      </div>
    </div>
  );
}

export default App;
