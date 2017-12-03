import * as THREE from 'three'
import FOUR from './OrbitControls.js'

import {TweenMax, Power1} from "gsap";


var controls, canvas, width, height, renderer, scene, camera, light, light2, geometry, material, shape, mouse, resizeTm

export function init () {

    canvas = document.querySelector('#scene');
    width = canvas.offsetWidth,
    height = canvas.offsetHeight;

    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0xA9E7DA);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
    camera.position.set(120, 0, 300);

    light = new THREE.HemisphereLight(0xffffff, 0x0C056D, 0.6);
    scene.add(light);

    light = new THREE.DirectionalLight(0x590D82, 0.5);
    light.position.set(200, 300, 400);
    scene.add(light);
    light2 = light.clone();
    light2.position.set(-200, 300, 400);
    scene.add(light2);

    controls = new FOUR.OrbitControls( camera );
    controls.addEventListener( 'change', render );
    controls.dimensions = { width: width, height: height}

    geometry = new THREE.IcosahedronGeometry(120, 4);
    for(var i = 0; i < geometry.vertices.length; i++) {
        var vector = geometry.vertices[i];
        vector._o = vector.clone();
    }
     material = new THREE.MeshPhongMaterial({
        emissive: 0x23f660,
        emissiveIntensity: 0.4,
        shininess: 0
    });
    shape = new THREE.Mesh(geometry, material);
    scene.add(shape);


    // function render(a) {
    //     requestAnimationFrame(render);
    //     updateVertices(a);
    //     renderer.render(scene, camera);
    // }

    // function onResize() {
    //     canvas.style.width = '';
    //     canvas.style.height = '';
    //     width = canvas.offsetWidth;
    //     height = canvas.offsetHeight;
    //     camera.aspect = width / height;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(width, height);
    // }

    mouse = new THREE.Vector2(0.8, 0.5);
    function onMouseMove(e) {
        TweenMax.to(mouse, 0.8, {
            y: (e.clientY / height),
            x : (e.clientX / width),
            ease: Power1.easeOut
        });
    }

    requestAnimationFrame(render);
    window.addEventListener("mousemove", onMouseMove);
    resizeTm;
    window.addEventListener("resize", function(){
        resizeTm = clearTimeout(resizeTm);
        resizeTm = setTimeout(onResize, 200);
    });
}

// function updateVertices (a) {
//     for(var i = 0; i < geometry.vertices.length; i++) {
//         var vector = geometry.vertices[i];
//         vector.copy(vector._o);
//         // var perlin = noise.simplex3(
//         //     (vector.x * 0.006) + (a * 0.0002),
//         //     (vector.y * 0.006) + (a * 0.0003),
//         //     (vector.z * 0.006)
//         // );
//         // var ratio = ((perlin*0.4 * (mouse.y+0.1)) + 0.8);
//         // vector.multiplyScalar(ratio);
//     }
//     geometry.verticesNeedUpdate = true;
// }

function render(a) {
    requestAnimationFrame(render);
    // updateVertices(a);
     // controls.update();
    renderer.render(scene, camera);
}

function onResize() {
    canvas.style.width = '';
    canvas.style.height = '';
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}
