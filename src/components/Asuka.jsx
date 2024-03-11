/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from "@react-three/drei"
import modelGlb from "../assets/AsukaExport.glb?url"
import { useEffect, useState } from "react"

const Asuka = () => {
  const { scene, nodes, animations } = useGLTF(modelGlb)
  const { actions, mixer } = useAnimations(animations, scene)
  //console.log(nodes, animations, names)

  const [currentAnimation, setCurrentAnimation] = useState('Idle')

  // Play animations
  useEffect(() => {
    actions[currentAnimation].reset().fadeIn(0.5).play()

    return () => { actions[currentAnimation].fadeOut(0.5) }
  }, [currentAnimation, actions])

  // Mixer functions. Listen for animation end, etc.
  useEffect(() => {
    actions['Idle'].repetitions = 1
    actions['Idle'].clampWhenFinished = true
    actions['Roundhouse'].repetitions = 1
    actions['Roundhouse'].clampWhenFinished = true

    mixer.timeScale = 0.45

    mixer.addEventListener('finished', (e) => {
      //console.log(e)
      if (currentAnimation == 'Idle') setCurrentAnimation('Roundhouse')
      else setCurrentAnimation('Idle')
    })

    return () => mixer.removeEventListener('finished')
  }, [mixer, actions, currentAnimation])

  useEffect(() => {
    //console.log(nodes)
    Object.keys(nodes).forEach((nodeName) => {
      const node = nodes[nodeName]
      if (node.type === "SkinnedMesh") {
        node.castShadow = true
      }
    })
  }, [nodes])

  return (
    <group dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

export default Asuka

useGLTF.preload(modelGlb)