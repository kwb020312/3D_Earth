import { styled } from "styled-components";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./components/earth";
import Topsection from "./components/topSection";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <CanvasContainer>
      <Topsection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
