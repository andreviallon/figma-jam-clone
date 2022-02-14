import "./App.scss";
import { Header } from "./components/Header";
import { Scene } from "./components/Scene";
import { ToolBar } from "./components/ToolBar";
import { Inspector } from "./components/Inspector";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faHandPaper,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

library.add(faCircle, faSquare, faArrowPointer, faHandPaper);

const App = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex">
        <ToolBar />
        <Scene />
        <div className="w-80">
          <Inspector />
        </div>
      </div>
    </div>
  );
};

export default App;
