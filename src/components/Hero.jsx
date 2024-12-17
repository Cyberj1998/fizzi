import React from 'react'
import CustomButton from './CustomButton'
import { TextSplitter } from './TextSplitter'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CansMovilePlaceholder from '../assets/all-cans-bunched.png'
import ViewCanvas from './ViewCanvas'
import { View } from '@react-three/drei'
import Scene from './Scene'
import { Bubbles } from './Bubbles'
import { useStore } from '../store/useStore'
import { useMediaQuery } from '../hooks/media'

gsap.registerPlugin(useGSAP, ScrollTrigger) 


const Hero = () => {

  const ready = useStore((state) => state.ready)
  const isDesktop = useMediaQuery("(min-width: 768px)", true)

  useGSAP(()=>{

    if(!ready && isDesktop) return

    const introTimeline = gsap.timeline()

    introTimeline
    .set('.hero-header-container',{opacity:1})
    .from('.hero-header', {
        scale: 3,
        opacity: 0,
        ease: 'power4.in',
        delay: .3,
        stagger: 1,
    })

    .from('.hero-subheading', {
        opacity: 0,
        y: 30,
        delay: .8,
    }, '+=.2')
    .from('.hero-body', {
        opacity: 0,
        y: 10,
    })
    .from('.hero-button', {
        opacity: 0,
        y: 10,
        duration: 0.6,
    })

    const scrollTl = gsap.timeline({
        scrollTrigger:{
            trigger: ".hero-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
        },
    });

    scrollTl.fromTo(".hero-container",{
        backgroundColor: "#fde047",
    },{
        backgroundColor: "#d9f99d",
        overwrite: "auto",
    },1).from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: .1,
        ease: "back.out(3)",
        duration: .5,
    })
    .from(".text-side-body", {
        y: 20,
        opacity: 0,

    })

  }, {dependencies:[ready, isDesktop]})

  const adjustScreen = () => {
    let screenScale = null;
    let screenPosition = [0, 0, -45]
    let rotation = [0.1, 3, 0];
    
    if(window.innerWidth < 768){
      screenScale = [2, 2, 2]
    }
    else{
      screenScale = [3, 3, 3]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [ModelScale, ModelPosition, Modelrotation] = adjustScreen()


  return (
    <section id='hero' className='hero-container grid overflow-x-hidden'>
        <div className='wrap'>
            {isDesktop && (
                <View className='hero-scene pointer-events-none fixed top-0 z-50 hidden h-[100vh] w-screen md:block'>
                    <Scene 
                        position={ModelPosition}
                        scale={ModelScale}
                        rotation={Modelrotation}
                    />
                    <Bubbles 
                    count={100}
                    speed={2}
                    repeat={true}
                    />
                </View>
            )}
            <div className='first-hero-section mt-[100px] grid h-screen place-items-center'>
                <div className='grid auto-rows-min place-items-center text-center'>
                    <div className='hero-header-container opacity-0'>
                        <TextSplitter 
                        className='hero-header lg:text-[13rem] text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem]'
                        text={'Live Gutzy'}
                        wordDisplayStyle='block'
                        />
                    </div>
                    <div className='hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl'>
                    Soda Perfected
                    </div>
                    <div className='hero-body text-2xl font-normal text-sky-950'>
                    3-sg sugar. 9g fiber. 5 delicious flavors
                    </div>
                    <div className='hero-button'>
                        <CustomButton 
                        title='Shop Now'
                        className='mt-12 rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-whitetransition-colors duration-150 hover:bg-orange-700 md:text-2xl'
                        />
                    </div>
                </div>
            </div>

            <div className='grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2'>
                <img 
                src={CansMovilePlaceholder} 
                alt="flavors"
                className='md:hidden w-full' 
                />
                <div className='flex flex-col'>
                <div className='text-side-heading-container'>
                    <TextSplitter 
                        className='text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl'
                        text={`Try all five flavors`}
                    />
                </div>
                <div className='text-side-body-container'>
                    <TextSplitter 
                        className='text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950'
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quas, nesciunt assumenda in beatae'}
                    />
                </div>
                </div>
            </div>
            <ViewCanvas />
        </div>
    </section>
  )
}



export default Hero
