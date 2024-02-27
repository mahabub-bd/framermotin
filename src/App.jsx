import ButtonTop from "./components/ButtonTop";
import KeyFrame from "./components/KeyFrame";
import { MyComponent } from "./components/Simple";
import TextMotion from "./components/TextMotion";
import TransitionType from "./components/TransitionType";

export default function App() {
  return (
    <>
      <h1 className="text-center text-3xl mt-5">Framer Motion</h1>
      <MyComponent />
      <KeyFrame />
      <ButtonTop />
      <TextMotion />
      <TransitionType />
    </>
  );
}
