import { Html, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

function Model({ transcript }) {
  const model = useGLTF("./model/dog.glb");
  const animation = useAnimations(model.animations, model.scene);
  const [visible, setVisible] = useState(true); // Control visibility

  useEffect(() => {
    const showAction = animation.actions.Show;
    const hideAction = animation.actions.Hide;
    const congratulateAction = animation.actions.Congratulate;
    const idleAction = animation.actions.Idle;

    if (animation.actions) {
      idleAction.play();

      if (transcript === "hello buddy") {
        idleAction.stop();
        congratulateAction.setLoop(THREE.LoopOnce);
        congratulateAction.play();
        setTimeout(() => {
          congratulateAction.stop();
          idleAction.play();
        }, 3000);
      }

      if (transcript === "bye-bye") {
        idleAction.stop();
        hideAction.setLoop(THREE.LoopOnce);
        hideAction.play();

        hideAction.clampWhenFinished = true; // Ensures model stays hidden after animation ends
        hideAction.onFinish = () => setVisible(false); // Hide model after 'Hide' animation ends
      }
    }
  }, [transcript, animation.actions]);

  return <>{visible && <primitive position-y={-0.4} object={model.scene} />}</>;
}

useGLTF.preload("./model/dog.glb");

export default Model;
