import * as THREE from 'three';
import { Flow } from '../three/modifiers/CurveModifier.js';
import { OBJLoader } from '../three/loaders/OBJLoader.js';
import { GLTFLoader } from '../three/loaders/GLTFLoader.js';
import Canvas3D from './canvas3D'

let scene, camera, renderer, dragon;
let clock = new THREE.Clock();
var time = 0;
let curve, curveObject, dynamicLight, ambientLight;
const CANVAS_ID = 'dragon';
const ASPECT_RATIO = 0.75;
const DRAW_PATH = false;
const USE_OBJ = false;
const ANIMATE_CURVE = false;

function init() {
    let canvas = document.getElementById(CANVAS_ID);
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;//w * ASPECT_RATIO;
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    camera = new THREE.PerspectiveCamera(45, w / h, 1, 2000);
    scene = new THREE.Scene();
    camera.position.set(0, 20, 200);
    camera.lookAt(scene.position);
    const MIN_X = -40;
    const VAR_X = 80;
    const MIN_Y = -40;
    const VAR_Y = 80;
    const MIN_Z = -80;
    const VAR_Z = 160;
    const points = [
        { x: 40, y: 0, z: 50 },
        { x: Math.random() * VAR_X + MIN_X, y: Math.random() * VAR_Y + MIN_Y, z: Math.random() * VAR_Z + MIN_Z },
        { x: -40, y: -40, z: 50 },
        { x: Math.random() * VAR_X + MIN_X, y: Math.random() * VAR_Y + MIN_Y, z: Math.random() * VAR_Z + MIN_Z },
        { x: -40, y: 10, z: -50 },
        { x: Math.random() * VAR_X + MIN_X, y: Math.random() * VAR_Y + MIN_Y, z: Math.random() * VAR_Z + MIN_Z },
        { x: 40, y: 30, z: -50 },
        { x: Math.random() * VAR_X + MIN_X, y: Math.random() * VAR_Y + MIN_Y, z: Math.random() * VAR_Z + MIN_Z },
        { x: -40, y: 10, z: -50 },
        { x: Math.random() * VAR_X + MIN_X, y: Math.random() * VAR_Y + MIN_Y, z: Math.random() * VAR_Z + MIN_Z },
        { x: -40, y: -40, z: 50 },
        { x: Math.random() * VAR_X + MIN_X, y: Math.random() * VAR_Y + MIN_Y, z: Math.random() * VAR_Z + MIN_Z },
    ];

    curve = new THREE.CatmullRomCurve3(
        points.map((e) => new THREE.Vector3(e.x, e.y, e.z))
    );
    curve.curveType = 'centripetal';
    curve.closed = true;
    if (DRAW_PATH) {
        curveObject = new THREE.LineLoop(
            new THREE.BufferGeometry().setFromPoints(curve.getPoints(50)),
            new THREE.LineBasicMaterial({ color: 0x00ff00 })
        );
        curveObject.rotation.y = Math.PI * 0.5;
        scene.add(curveObject);
    }

    ambientLight = new THREE.AmbientLight(0x003973);
    scene.add(ambientLight);

    dynamicLight = new THREE.PointLight(0xffffff);
    dynamicLight.add(new THREE.Mesh(new THREE.SphereGeometry(2, 16, 8), new THREE.MeshBasicMaterial({ color: 0xffffff })));
    scene.add(dynamicLight);

    //
    if (USE_OBJ) {
        const loader = new OBJLoader();
        loader.load('/assets/obj/dragon.obj', function (obj) {
            obj.traverse(function (child) {
                //if (child.isMesh) child.material.map = texture;
            });
            console.log('loaded dragon.obj');
            dragon = new Flow(obj);
            dragon.updateCurve(0, curve);
            scene.add(dragon.object3D);
        });
    }
    else {
        const loader = new GLTFLoader();
        loader.setPath('/assets/gltf/');
        loader.load('dragon.glb', function (gltf) {
            dragon = new Flow(gltf.scene);
            dragon.updateCurve(0, curve);
            scene.add(dragon.object3D);
        });
    }
    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    let canvas = document.getElementById(CANVAS_ID);
    if (!canvas) {
        return;
    }
    canvas.style = "";
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;//w * ASPECT_RATIO;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
}

function animate() {
    time += clock.getDelta();
    if (ANIMATE_CURVE) {
        curve.points[0].y = 20 * Math.sin(time * 0.9);
        curve.points[2].y = 50 + 20 * Math.sin(time * 0.7);
        curve.points[4].y = 20 + 20 * Math.sin(time * 0.3);
        curve.points[6].y = 30 + 20 * Math.sin(time * 0.2);
        if (DRAW_PATH) {
            curveObject.geometry.dispose();
            curveObject.geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
        }
        if (dragon) {
            dragon.updateCurve(0, curve);
        }
    }
    if (dragon) {
        dragon.updateCurve(0, curve);
        dragon.moveAlongCurve(0.002);
    }
    if (dynamicLight) {
        dynamicLight.position.x = Math.sin(time * 0.7) * 30 + 20;
        dynamicLight.position.y = Math.cos(time * 0.5) * 40;
        dynamicLight.position.z = Math.cos(time * 0.3) * 30 + 20;
        dynamicLight.color.r = (Math.sin(time * 0.3) + 1.0) * 0.5;
        dynamicLight.color.g = (Math.sin(time * 0.7) + 1.0) * 0.5;
        dynamicLight.color.b = (Math.sin(time * 0.2) + 1.0) * 0.5;
    }
    if (ambientLight) {
        ambientLight.color.r = (Math.sin(time * 0.1) + 1.0) * 0.5;
        ambientLight.color.g = (Math.sin(time * 0.07) + 1.0) * 0.5;
        ambientLight.color.b = (Math.sin(time * 0.03) + 1.0) * 0.5;
    }
    renderer.render(scene, camera);
}

export default class DragonScene extends Canvas3D {
    constructor(props) {
        super(props);
        this.canvasID = CANVAS_ID;
        this.init = init;
        this.animate = animate;
    }
}