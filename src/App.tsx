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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";

library.add(faCircle, faSquare, faArrowPointer, faHandPaper);

const App = () => {
  const dispatch = useDispatch();
  const { shapes } = useSelector((state: RootState) => state.stage);

  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex">
        <ToolBar />
        <Scene shapes={shapes} />
        <div className="w-80">
          <Inspector />
        </div>
      </div>
    </div>
  );
};

export default App;
