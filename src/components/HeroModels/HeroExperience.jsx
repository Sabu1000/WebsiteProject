import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Shiva } from "./Shiva.jsx"
import { useRef, Suspense } from "react"
import Particles from "./Particles.jsx"

const HeroExperience = () => {
  const modelRef = useRef()

  return (
    <div className="w-full h-screen" style={{ height: "800px" }}>
      <Canvas
        className="w-full h-full"
        camera={{ position: [220, 80, -80], fov: 60 }}
        shadows
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={3} />
          <directionalLight position={[0, 10, 10]} intensity={2} castShadow />
          <spotLight position={[-10, 10, 10]} intensity={2} castShadow />
          
          {/* Debug helpers */}
          <axesHelper args={[5]} />
          <gridHelper args={[10, 10]} />

          {/* Add particles with much larger radius to match scene scale */}
          <Particles count={350} radius={100} color="#5fadff" />
          
          {/* Controls with reasonable zoom limits */}
          <OrbitControls 
            makeDefault
            enablePan={true} 
            enableZoom={true} 
            minDistance={350}
            maxDistance={450}
            target={[0, 0, 0]}
          />
          
          {/* Shiva model */}
          <group 
            ref={modelRef}
            position={[0, 0, 0]}
            scale={2.5}
            rotation={[0, Math.PI/1.5, 0]}
          >
            <Shiva />
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroExperience