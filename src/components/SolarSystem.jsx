import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function SolarSystem() {
  const mountRef = useRef(null);

  const [planetSpeeds, setPlanetSpeeds] = useState({
    Mercury: 0.02,
    Venus: 0.015,
    Earth: 0.01,
    Mars: 0.008,
    Jupiter: 0.006,
    Saturn: 0.005,
    Uranus: 0.003,
    Neptune: 0.002,
  });

  const tooltipRef = useRef(null);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add stars
    for (let i = 0; i < 500; i++) {
      const starGeometry = new THREE.SphereGeometry(0.05, 12, 12);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(starGeometry, starMaterial);

      star.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );

      scene.add(star);
    }

    if (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    mountRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 50;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const light = new THREE.PointLight(0xffffff, 2, 500);
    light.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.bias = -0.005; // optional: reduce shadow artifacts
    scene.add(light);

    // Sun
    const sunGeometry = new THREE.SphereGeometry(3, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.receiveShadow = true;
    scene.add(sun);

    // Shadow-catching plane
    const planeGeometry = new THREE.PlaneGeometry(200, 200);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
    const shadowPlane = new THREE.Mesh(planeGeometry, planeMaterial);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -5; // below the planets
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Planets
    const planetData = [
      {
        name: "Mercury",
        texture: "textures/mercury.jpg",
        size: 0.5,
        distance: 6,
      },
      { name: "Venus", texture: "textures/venus.jpg", size: 0.8, distance: 8 },
      { name: "Earth", texture: "textures/earth.jpg", size: 1, distance: 10 },
      { name: "Mars", texture: "textures/mars.jpg", size: 0.7, distance: 12 },
      {
        name: "Jupiter",
        texture: "textures/jupiter.jpg",
        size: 2,
        distance: 16,
      },
      {
        name: "Saturn",
        texture: "textures/saturn.jpg",
        size: 1.8,
        distance: 20,
      },
      {
        name: "Uranus",
        texture: "textures/uranus.jpg",
        size: 1.2,
        distance: 24,
      },
      {
        name: "Neptune",
        texture: "textures/neptune.jpg",
        size: 1.1,
        distance: 28,
      },
    ];

    const planets = [];

    const textureLoader = new THREE.TextureLoader();

    planetData.forEach((data) => {
      const geometry = new THREE.SphereGeometry(data.size, 32, 32);
      const texture = textureLoader.load(data.texture);
      const material = new THREE.MeshStandardMaterial({ map: texture });
      const planet = new THREE.Mesh(geometry, material);
      const ringGeometry = new THREE.RingGeometry(
        data.distance - 0.05,
        data.distance + 0.05,
        64
      );
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x888888,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);

      planet.userData = { ...data, angle: 0 };
      planet.rotation.y += 0.01; // inside planets.forEach
      planet.castShadow = true;
      planet.receiveShadow = true;

      scene.add(planet);
      planets.push(planet);
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseMove(event) {
      const { left, top, width, height } =
        renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - left) / width) * 2 - 1;
      mouse.y = -((event.clientY - top) / height) * 2 + 1;
    }

    window.addEventListener("mousemove", onMouseMove);

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      clock.getDelta();

      planets.forEach((planet) => {
        const name = planet.userData.name;
        const speed = planetSpeeds[name] || 0.01;
        planet.userData.angle += speed;
        planet.position.x =
          planet.userData.distance * Math.cos(planet.userData.angle);
        planet.position.z =
          planet.userData.distance * Math.sin(planet.userData.angle);
      });

      // Tooltip detection
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(planets);
      if (intersects.length > 0) {
        const planetName = intersects[0].object.userData.name;
        setHoveredPlanet({ name: planetName, x: mouse.x, y: mouse.y });
      } else {
        setHoveredPlanet(null);
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [planetSpeeds]);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

        {/* Control Panel */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: "#111",
            padding: "10px",
            borderRadius: "8px",
            color: "white",
            zIndex: 1,
            maxHeight: "90vh",
            overflowY: "auto",
            fontSize: "12px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Planet Speeds</h3>
          {Object.keys(planetSpeeds).map((planet) => (
            <div key={planet} style={{ marginBottom: "10px" }}>
              <label>{planet}: </label>
              <input
                type="range"
                min="0.001"
                max="0.05"
                step="0.001"
                value={planetSpeeds[planet]}
                onChange={(e) =>
                  setPlanetSpeeds({
                    ...planetSpeeds,
                    [planet]: parseFloat(e.target.value),
                  })
                }
              />
              <span style={{ marginLeft: "8px" }}>
                {planetSpeeds[planet].toFixed(3)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {hoveredPlanet && (
        <div
          ref={tooltipRef}
          style={{
            position: "absolute",
            top: `${(1 - hoveredPlanet.y) * window.innerHeight * 0.5}px`,
            left: `${(hoveredPlanet.x + 1) * window.innerWidth * 0.5}px`,
            background: "rgba(0, 0, 0, 0.7)",
            padding: "4px 8px",
            color: "white",
            borderRadius: "4px",
            pointerEvents: "none",
            fontSize: "12px",
            zIndex: 2,
          }}
        >
          {hoveredPlanet.name}
        </div>
      )}
    </>
  );
}
