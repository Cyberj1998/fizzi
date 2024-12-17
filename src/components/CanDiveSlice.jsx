import React from 'react'
import DiveScene from './DiveScene'
import { View } from '@react-three/drei'

const CanDiveSlice = () => {
  return (
    <section id='dive_scene'>
      <View className='h-screen w-screen' >
        <DiveScene />
      </View>
    </section>
  )
}

export default CanDiveSlice
