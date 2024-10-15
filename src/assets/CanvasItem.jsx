import { Canvas } from "@react-three/fiber";
import "../App.css";

import { Perf } from "r3f-perf";
import Scene from "./Scene";

function CanvasItem({ transcript }) {
  return (
    <>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{
          fov: 35,
          near: 0.1,
          far: 1000,
        }}
      >
        <Scene transcript={transcript} />
        <Perf position="top-right" />
      </Canvas>
    </>
  );
}

export default CanvasItem;
