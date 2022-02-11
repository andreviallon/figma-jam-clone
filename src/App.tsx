import "./App.scss";
import { Header } from "./components/Header";
import { Scene } from "./components/Scene";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faHandPaper,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

library.add(faCircle, faSquare, faArrowPointer, faHandPaper);

function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <Scene />
    </div>
  );
}

export default App;
