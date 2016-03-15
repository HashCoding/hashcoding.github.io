(function () {
	var mouseX = 0, mouseY = 0,

            windowHalfX = window.innerWidth / 2,
            windowHalfY = window.innerHeight / 2,

            SEPARATION = 200,
            AMOUNTX = 10,
            AMOUNTY = 10,

            camera, scene, renderer;

            init();
            animate();

            function init() {

                var see1, separation = 100, amountX = 50, amountY = 50,
                particles, particle;

                see1 = document.getElementById('see1');
      			

                camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
                camera.position.z = 100;

                scene = new THREE.Scene();

                renderer = new THREE.CanvasRenderer();
                renderer.setPixelRatio( window.devicePixelRatio );//设备像素比例
                renderer.setSize(window.innerWidth, window.innerHeight );
                see1.appendChild( renderer.domElement );

                // particles

                var material = new THREE.SpriteCanvasMaterial( {

                    color: 0x007f7f,
                    opacity: 0.9,

                    program: function ( context ) {

                        context.beginPath();//开始一条路径
                        context.arc( 0, 0, 0.5, 0, Math.PI * 2, true );//规定圆形路径
                        context.fill();//填充

                    }

                } );

                var geometry = new THREE.Geometry();

                for ( var i = 0; i < 120; i ++ ) {

                    particle = new THREE.Sprite( material );

                    // particle.position.x = 10 ;
                    // particle.position.y = 10;
                    // particle.position.z = 10;

                    particle.position.x = Math.random() * 800 - 400 ;
                    particle.position.y = Math.random() * 800 - 400;
                    particle.position.z = Math.random() * 800 - 400;
                    particle.position.normalize();//规整化粒子
                    particle.position.multiplyScalar( Math.random() * 10 + 450 );//扩大倍数展开
                    particle.scale.x = particle.scale.y = 10;//粒子大小
                    scene.add( particle );

                    geometry.vertices.push( particle.position );

                }

                // lines

                var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x007f7f, opacity: 0.5 } ) );
                scene.add( line );

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', onDocumentTouchMove, false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            //

            function onDocumentMouseMove(event) {

                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;

            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length > 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    mouseY = event.touches[ 0 ].pageY - windowHalfY;

                }

            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    mouseY = event.touches[ 0 ].pageY - windowHalfY;

                }

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();

            }

            function render() {

                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
                camera.lookAt( scene.position );

                renderer.render( scene, camera );

            }
})()