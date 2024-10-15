import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import Bike from "./Bike"; // Uncomment this if you plan to use it
import { Html } from "@react-three/drei";

const Scene = ({ transcript }) => {
  console.log(transcript);
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight intensity={2} />
      <OrbitControls />
      <Suspense
        fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"green"} />
          </mesh>
        }
      >
        <Model transcript={transcript} />
        {/* Uncomment this line if you want to use the Bike model */}
        {/* <Bike position={[-0.5, 0.75, 0]} /> */}
      </Suspense>
    </>
  );
};

export default Scene;
