/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import InvisiblePlane from "./InvisiblePlane"
import Asuka from "./Asuka"

const Stage = () => {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0.5, 1] }}
        shadows
      >
        <Suspense>
          <OrbitControls />
          <Environment preset="sunset" background={false} />
          <directionalLight
            position={[0,1,0]}
            intensity={0.5}
            castShadow
          />

          <group position-y={-1}>
            <InvisiblePlane scale={[5,5,5]} />
            <Asuka />
          </group>

        </Suspense>
      </Canvas>
    </>
  )
}

export default Stage