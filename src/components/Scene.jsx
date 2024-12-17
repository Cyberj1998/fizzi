import React, { useRef, useEffect } from 'react';
import MySodaCan from './MySodaCan';
import { Float } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useStore } from '../store/useStore';

//----------Textures--------------------
import grapeTexture from '/assets/labels/grape.png';
import watermelonTexture from '/assets/labels/watermelon.png';
import cherryTexture from '/assets/labels/cherry.png';
import strawberryTexture from '/assets/labels/strawberry.png';
import lemonTexture from '/assets/labels/lemon-lime.png';

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Scene = (props) => {

  const isReady = useStore((state)=> state.isReady)

  const can1Ref = useRef();
  const can2Ref = useRef();

  const can1GroupRef = useRef()
  const can2GroupRef = useRef()

  const can3Ref = useRef();
  const can4Ref = useRef();
  const can5Ref = useRef();
  const groupRef = useRef()

  const gsapAnimation = () => {

    //---Define cans starting location-----
    if (can1Ref.current) {
      gsap.set(can1GroupRef.current.position, { x: -50, y: 20 });
      gsap.set(can1GroupRef.current.rotation, { z: -0.5 });
    } else {
      console.error('can1Ref is not defined');
    }
    
    // Add other cans' initial positions if needed
    if (can2Ref.current) {
      gsap.set(can2GroupRef.current.position, { x: 50, y: 20 });
      gsap.set(can2GroupRef.current.rotation, { z: 0.5 });
    } else {
      console.error('can2Ref is not defined');
    }
    
    // Add logic for can3, can4, can5 similarly here
    if (can3Ref.current) {
      gsap.set(can3Ref.current.position, { y: 100, z: 20 });
    } else {
      console.error('can2Ref is not defined');
    }
    if (can4Ref.current) {
      gsap.set(can4Ref.current.position, { y: -100, z: 50, x: 0 });
    } else {
      console.error('can2Ref is not defined');
    }
    if (can5Ref.current) {
      gsap.set(can5Ref.current.position, { x: -100, y: 150 });
    } else {
      console.error('can2Ref is not defined');
    }
    isReady()


    const introTl = gsap.timeline({
      defaults: {
        duration: 5,
        ease: "back.out(1.4)",
      }
    })
    
    if(window.scrollY < 20){
    introTl
    .from(can1GroupRef.current.position, { y: -100, x: -50 }, 0)
    .from(can1GroupRef.current.rotation, { z: 2 }, 0)
    .from(can2GroupRef.current.position, { y: 100, x: 50 }, 0)
    .from(can2GroupRef.current.rotation, { z: 2 }, 0)
    }
    
    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
    .to(groupRef.current.rotation, { y: Math.PI * 2 })
    .to(can1Ref.current.position, { x: 65, y: 15, z: 5 }, 0)
    .to(can1Ref.current.rotation, { z: 0.5 }, 0)

    .to(can2Ref.current.position, { x: -1 }, 0)
    .to(can2Ref.current.rotation, { z: -0.5 }, 0)
    
    .to(can3Ref.current.position, { x: 28, y: -10, z: 15 }, 0)
    .to(can3Ref.current.rotation, { z: 0.1 }, 0)

    .to(can4Ref.current.position, { x: 30, y: 30, z: 1}, 0)
    .to(can4Ref.current.rotation, { z: 0.1 }, 0)

    .to(can5Ref.current.position, { x: 15, y: 20, z: -15 }, 0)
    .to(can5Ref.current.rotation, { z: 0.4 }, 0)

  };

  useEffect(() => {
    gsapAnimation();
  }, []);

  return (
    <group ref={groupRef}>
      <Float
        floatIntensity={0.1}  
        rotationIntensity={0.1}  
        speed={7}            
        floatingRange={[0, 0.005]}
      >
        <group ref={can1GroupRef}>
        <group ref={can1Ref}>
          <MySodaCan
            scale={props.scale}
            rotation={props.rotation}
            position={props.position}
            texture={cherryTexture}
          />
        </group>
        </group>
      </Float>

      <Float
        floatIntensity={0.1}  
        rotationIntensity={0.1}  
        speed={7}            
        floatingRange={[0, 0.005]}
      > 
        <group ref={can2GroupRef}>
        <group ref={can2Ref}>
          <MySodaCan
            scale={props.scale}
            rotation={props.rotation}
            position={props.position}
            texture={watermelonTexture}
          />
        </group>
        </group>  
      </Float>

      <Float
        floatIntensity={0.1}  
        rotationIntensity={0.1}  
        speed={7}            
        floatingRange={[0, 0.005]}
      >
        <group ref={can3Ref}>
          <MySodaCan
            scale={props.scale}
            rotation={props.rotation}
            position={props.position}
            texture={strawberryTexture}
          />
        </group>
      </Float>
      
      <Float
        floatIntensity={0.1}  
        rotationIntensity={0.1}  
        speed={7}            
        floatingRange={[0, 0.005]}
      >
        <group ref={can4Ref}>
          <MySodaCan
            scale={props.scale}
            rotation={props.rotation}
            position={props.position}
            texture={lemonTexture}
          />
        </group>
      </Float>

      <Float
        floatIntensity={0.1}  
        rotationIntensity={0.1}  
        speed={7}            
        floatingRange={[0, 0.005]}
      >
        <group ref={can5Ref}>
          <MySodaCan
            scale={props.scale}
            rotation={props.rotation}
            position={props.position}
            texture={grapeTexture}
          />
        </group>
      </Float>
        <Environment files='/hdr/lobby.hdr' />
    </group>
  );
};

export default Scene;
