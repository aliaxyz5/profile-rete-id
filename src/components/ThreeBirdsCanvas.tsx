import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { natureAudio } from '../utils/natureAudio';
import { Volume2, VolumeX } from 'lucide-react';

// Bird 3D Geometry generator with flapping wings
function createBirdGeometry(): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();

  // Bird vertices (Body triangle + Left wing triangle + Right wing triangle)
  // Vertex positions when wings are flat (flapping is updated in render loop or vertex displacement)
  const vertices = new Float32Array([
    // Body (Tail -> Head -> Chest)
    0, 0, -15,   // Tail
    0, 2, 15,    // Head tip
    0, -3, 2,    // Belly/Chest

    // Left Wing (Inner Chest -> Outer Wing Tip -> Inner Tail)
    0, 0, 5,     // Wing root front
    -24, 0, -2,  // Left wing tip
    0, 0, -10,   // Wing root back

    // Right Wing (Inner Chest -> Outer Wing Tip -> Inner Tail)
    0, 0, 5,     // Wing root front
    24, 0, -2,   // Right wing tip
    0, 0, -10    // Wing root back
  ]);

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.computeVertexNormals();
  return geometry;
}

interface Boid {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  acceleration: THREE.Vector3;
  mesh: THREE.Mesh;
  wingPhase: number;
  flapSpeed: number;
}

export const ThreeBirdsCanvas: React.FC<{
  className?: string;
  birdCount?: number;
}> = ({ className = '', birdCount = 28 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [ambientAudioActive, setAmbientAudioActive] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = null; // Transparent to blend seamlessly with light blue & white gradient

    const camera = new THREE.PerspectiveCamera(65, width / height, 1, 3000);
    camera.position.z = 450;
    camera.position.y = 80;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'default'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x0284C7, 1.4); // Fresh cyan directional light
    dirLight.position.set(200, 300, 200);
    scene.add(dirLight);

    const cyanLight = new THREE.PointLight(0x38BDF8, 2.2, 700);
    cyanLight.position.set(-150, -80, 120);
    scene.add(cyanLight);

    const greenLight = new THREE.PointLight(0x10B981, 1.6, 600);
    greenLight.position.set(120, -100, 80);
    scene.add(greenLight);

    // 3. Simple Calm Sparkles / Nature motes (calm, tidak ramai)
    const particleCount = 28;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 1000;
      particlePositions[i + 1] = (Math.random() - 0.5) * 600;
      particlePositions[i + 2] = (Math.random() - 0.5) * 800;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38BDF8,
      size: 3.5,
      transparent: true,
      opacity: 0.5,
      blending: THREE.NormalBlending
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 4. Materials for Birds (RETE. ID Cyan Blue, Fresh Sky Blue & Nature Mint)
    const cyanBirdMaterial = new THREE.MeshStandardMaterial({
      color: 0x0284C7, // RETE. ID Hummingbird Cyan
      roughness: 0.3,
      metalness: 0.3,
      side: THREE.DoubleSide
    });

    const greenBirdMaterial = new THREE.MeshStandardMaterial({
      color: 0x38BDF8, // Fresh Light Sky Blue
      roughness: 0.35,
      metalness: 0.25,
      side: THREE.DoubleSide
    });

    const goldBirdMaterial = new THREE.MeshStandardMaterial({
      color: 0x10B981, // Fresh Nature Mint Green
      roughness: 0.35,
      metalness: 0.25,
      side: THREE.DoubleSide
    });

    // 5. Create Boids Flock
    const boids: Boid[] = [];
    const boundX = 450;
    const boundY = 280;
    const boundZ = 350;

    for (let i = 0; i < birdCount; i++) {
      const birdGeo = createBirdGeometry();
      const material = i % 3 === 0 ? cyanBirdMaterial : i % 3 === 1 ? greenBirdMaterial : goldBirdMaterial;
      const mesh = new THREE.Mesh(birdGeo, material);
      const scale = 0.8 + Math.random() * 0.5;
      mesh.scale.set(scale, scale, scale);

      const boid: Boid = {
        position: new THREE.Vector3(
          (Math.random() - 0.5) * boundX,
          (Math.random() - 0.5) * boundY,
          (Math.random() - 0.5) * boundZ
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 4
        ).normalize().multiplyScalar(2.5 + Math.random() * 2),
        acceleration: new THREE.Vector3(),
        mesh,
        wingPhase: Math.random() * Math.PI * 2,
        flapSpeed: 0.15 + Math.random() * 0.08
      };

      mesh.position.copy(boid.position);
      scene.add(mesh);
      boids.push(boid);
    }

    // 6. Mouse Tracking
    const mouseTarget = new THREE.Vector3(0, 0, 0);
    let hasMouseInteracted = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseTarget.set(x * boundX * 0.8, y * boundY * 0.8, 50);
      hasMouseInteracted = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
        mouseTarget.set(x * boundX * 0.8, y * boundY * 0.8, 50);
        hasMouseInteracted = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // 7. Flocking Boids Algorithm & Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();
    const startTime = performance.now();

    const maxSpeed = 4.2;
    const maxForce = 0.14;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const currentTime = performance.now();
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const elapsedTime = (currentTime - startTime) / 1000;

      // Gentle firefly motion
      const pAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      const pArray = pAttr.array as Float32Array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        pArray[i] += Math.sin(elapsedTime * 1.5 + i) * 0.25;
      }
      pAttr.needsUpdate = true;

      // Update Boids
      for (let i = 0; i < boids.length; i++) {
        const boid = boids[i];

        // Flocking forces
        const sep = new THREE.Vector3();
        const ali = new THREE.Vector3();
        const coh = new THREE.Vector3();
        let totalNear = 0;

        for (let j = 0; j < boids.length; j++) {
          if (i === j) continue;
          const other = boids[j];
          const dist = boid.position.distanceTo(other.position);

          if (dist > 0 && dist < 120) {
            // Separation
            if (dist < 40) {
              const diff = new THREE.Vector3().subVectors(boid.position, other.position);
              diff.normalize().divideScalar(dist);
              sep.add(diff);
            }
            // Alignment & Cohesion
            ali.add(other.velocity);
            coh.add(other.position);
            totalNear++;
          }
        }

        if (totalNear > 0) {
          ali.divideScalar(totalNear).normalize().multiplyScalar(maxSpeed).sub(boid.velocity).clampLength(0, maxForce);
          coh.divideScalar(totalNear).sub(boid.position).normalize().multiplyScalar(maxSpeed).sub(boid.velocity).clampLength(0, maxForce);
        }

        if (sep.lengthSq() > 0) {
          sep.normalize().multiplyScalar(maxSpeed).sub(boid.velocity).clampLength(0, maxForce * 1.4);
        }

        // Mouse attraction/curiosity
        const mouseForce = new THREE.Vector3();
        if (hasMouseInteracted) {
          const mouseDist = boid.position.distanceTo(mouseTarget);
          if (mouseDist < 280) {
            mouseForce.subVectors(mouseTarget, boid.position).normalize().multiplyScalar(maxSpeed * 0.6);
            mouseForce.clampLength(0, maxForce * 0.9);
          }
        }

        // Soft boundary reflection
        const boundForce = new THREE.Vector3();
        if (Math.abs(boid.position.x) > boundX) boundForce.x = -Math.sign(boid.position.x) * 1.5;
        if (Math.abs(boid.position.y) > boundY) boundForce.y = -Math.sign(boid.position.y) * 1.5;
        if (Math.abs(boid.position.z) > boundZ) boundForce.z = -Math.sign(boid.position.z) * 1.5;

        // Apply forces with weights
        boid.acceleration.add(sep.multiplyScalar(1.5));
        boid.acceleration.add(ali.multiplyScalar(1.0));
        boid.acceleration.add(coh.multiplyScalar(0.8));
        boid.acceleration.add(mouseForce.multiplyScalar(1.2));
        boid.acceleration.add(boundForce);

        // Physics update
        boid.velocity.add(boid.acceleration);
        boid.velocity.clampLength(1.8, maxSpeed);
        boid.position.add(boid.velocity);
        boid.acceleration.set(0, 0, 0);

        // Update mesh position and rotation
        boid.mesh.position.copy(boid.position);

        // Look at heading direction
        const lookTarget = new THREE.Vector3().addVectors(boid.position, boid.velocity);
        boid.mesh.lookAt(lookTarget);

        // Wing flapping animation: update vertices of left and right wingtips
        boid.wingPhase += boid.flapSpeed * (boid.velocity.length() / 2.5);
        const wingLift = Math.sin(boid.wingPhase) * 12;
        const posAttr = boid.mesh.geometry.attributes.position as THREE.BufferAttribute;
        const arr = posAttr.array as Float32Array;

        // Left wingtip vertex index: 4 (x=-24, y=1, z=-2) -> arr[4*3 + 1] is y
        arr[4 * 3 + 1] = wingLift;
        // Right wingtip vertex index: 7 (x=24, y=1, z=-2) -> arr[7*3 + 1] is y
        arr[7 * 3 + 1] = wingLift;
        posAttr.needsUpdate = true;
      }

      // Slow camera drift for majestic avian perspective
      camera.position.x = Math.sin(elapsedTime * 0.12) * 40;
      camera.position.y = 80 + Math.cos(elapsedTime * 0.15) * 20;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      boids.forEach(b => {
        b.mesh.geometry.dispose();
      });
      cyanBirdMaterial.dispose();
      greenBirdMaterial.dispose();
      goldBirdMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [birdCount]);

  // Toggle procedural ecosystem audio loop (soft wind, peaceful birdsong)
  const toggleAmbientAudio = () => {
    const isNowPlaying = natureAudio.toggle();
    setAmbientAudioActive(isNowPlaying);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      data-testid="three-birds-canvas"
    >
      {/* Interactive Control Pill for Nature Ecosystem Audio */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-sky-200/90 shadow-md text-xs text-sky-900">
        <button
          onClick={toggleAmbientAudio}
          className="flex items-center gap-2 hover:text-[#0284C7] transition-colors cursor-pointer font-semibold"
          title="Dengarkan suara ekosistem alam (angin sejuk & kicau burung)"
          aria-label="Dengarkan suara ekosistem alam"
        >
          {ambientAudioActive ? (
            <Volume2 className="w-4 h-4 text-[#0284C7] animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400" />
          )}

          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${ambientAudioActive ? 'bg-[#0284C7] animate-ping' : 'bg-slate-300'}`} />
            <span>{ambientAudioActive ? 'Ekosistem Alam Aktif' : 'Bunyikan Suara Alam'}</span>
          </div>

          {/* Miniature animated sound wave equalizer */}
          {ambientAudioActive && (
            <div className="flex items-end gap-0.5 h-3 ml-1">
              <span className="w-0.5 h-2 bg-[#0284C7] animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 h-3 bg-[#38BDF8] animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 h-1.5 bg-[#0284C7] animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          )}
        </button>

        <span className="text-sky-200">|</span>
        <span className="text-slate-500 text-[11px] font-normal">Arahkan kursor awan untuk memandu kawanan burung</span>
      </div>
    </div>
  );
};
