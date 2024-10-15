import { OrbitControls } from "@react-three/drei";

const Box = () => {
  return (
    <>
      <OrbitControls />
      {/* <axesHelper args={[3]} />
      <gridHelper args={[20, 30]} /> */}
      {/* <mesh>
        <boxGeometry />
        <meshBasicMaterial color={"orange"} />
      </mesh> */}
    </>
  );
};

export default Box;
