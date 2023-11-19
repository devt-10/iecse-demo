import React, { ReactElement } from 'react'
import ParticleImage, { ParticleOptions,forces } from "react-particle-image";
import styled from 'styled-components';
import logo from "../assets/logooo.png"

const Container = styled.div` 
z-index:-1;
canvas{
    background: #fff !important;
}
`

const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => "#61dafb"
  };
   
export default function Logo(): ReactElement {
    return (
        <Container>
    <ParticleImage
      src={logo}
      scale={0.23}
      entropy={20}
      maxParticles={4200}
      particleOptions={particleOptions}
      mouseMoveForce={(x:number,y:number)=> forces.disturbance(x,y,3) }
    />
            </Container>
    )
}
