const React = require('react');
const D3Component = require('idyll-d3-component');


import { Scene, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, BoxGeometry, Mesh }  from 'three';
// Alternatively:
// import * from 'three'

const sizeX = 600;
const sizeY = 400;

class CustomThreeComponent extends D3Component {
  initialize(node, props) {
    // Create an empty scene
    var scene = new Scene();

    // Create a basic perspective camera
    var camera = new PerspectiveCamera( 75, sizeX/sizeY, 0.1, 1000 );
    camera.position.z = 4;

    // Create a renderer with Antialiasing
    var renderer = new WebGLRenderer({antialias:true});

    // Configure renderer clear color
    renderer.setClearColor("#000000");

    // Configure renderer size
    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize(){
      if (node.clientWidth > sizeX) {
        camera.aspect = sizeX/sizeY;
        camera.updateProjectionMatrix();
        renderer.setSize( sizeX, sizeY );
      } else {
        camera.aspect = node.clientWidth/sizeY;
        camera.updateProjectionMatrix();
        renderer.setSize( node.clientWidth, sizeY );
      }
    }
    onWindowResize()

    // Append Renderer to DOM
    node.appendChild( renderer.domElement );

    // ------------------------------------------------
    // FUN STARTS HERE
    // ------------------------------------------------

    // Create a Cube Mesh with basic material
    var geometry = new BoxGeometry( 1, 1, 1 );
    var material = new MeshBasicMaterial( { color: "#433F81" } );
    var cube = new Mesh( geometry, material );

    // Add cube to Scene
    scene.add( cube );

    // Render Loop
    var render = function () {
      requestAnimationFrame( render );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    render();
  }

  update(props, oldProps) {
  }
}

module.exports = CustomThreeComponent;
