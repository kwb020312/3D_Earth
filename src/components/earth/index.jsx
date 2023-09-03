import { Fragment } from "react";

const Earth = (props) => {
  return (
    <Fragment>
      <ambientLight intensity={1} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="red" />
      </mesh>
    </Fragment>
  );
};

export default Earth;
