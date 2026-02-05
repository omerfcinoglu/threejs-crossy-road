import * as THREE from "three";
import { Camera } from "./components/Camera";
import { Renderer } from "./components/Renderer";
import { player } from "./components/Player/Player";
import { Map } from "./components/Map/Map";
import { DirectionalLight } from "./components/DirectionalLight";

export class Game {
  private scene!: THREE.Scene;
  private ambientLight!: THREE.AmbientLight;
  private dirLight!: THREE.DirectionalLight;
  private camera!: THREE.Camera;
  private map!: Map;
  private renderer!: THREE.WebGLRenderer;

  constructor() {
    this.init();
  }

  private init(): void {
    this.scene = new THREE.Scene();
    this.ambientLight = new THREE.AmbientLight();
    this.dirLight = DirectionalLight();
    this.scene.add(this.ambientLight);
    this.scene.add(this.dirLight);

    this.camera = Camera();
    this.scene.add(this.camera);
    this.scene.add(player.body);
    this.map = new Map();
    this.scene.add(this.map.group);
    this.renderer = Renderer();
    this.renderer.render(this.scene, this.camera);
  }
}
