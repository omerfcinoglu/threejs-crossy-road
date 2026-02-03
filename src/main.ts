import * as THREE from "three";
import { Camera } from "./components/Camera";
import { Renderer } from "./components/Renderer";
import { player } from "./components/Player/Player";

const scene = new THREE.Scene();
const ambientLight = new THREE.AmbientLight();
const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-100, -100, -100);
scene.add(ambientLight);
scene.add(dirLight);

const camera = Camera();
scene.add(camera);
scene.add(player.body);

const renderer = Renderer();
renderer.render(scene, camera);
