import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'



gsap.registerPlugin(useGSAP) 

const ViewCanvas = () => {

  return (
    <>
      <Canvas
        className='z-50 pointer-events-none'
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        shadows
        dpr={[1, 1, 5]}
        gl={{antialias: true}}
      >
        <Suspense fallback={null} >
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}



export default ViewCanvas

