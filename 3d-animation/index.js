(function() {
    document.onmousemove = handleMouseMove;
    var startingX, startingY
    var into = true
    var mouseDown = 0;
    document.onmousedown = function() { 
    ++mouseDown;
    }
    document.onmouseup = function() {
    --mouseDown;
    startingX = 0
    startingY = 0
    into = true
    }
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
        if (into) {
            startingX = event.pageX
            startingY = event.pageY
        }
        if (mouseDown) {
            var scene = document.getElementById('scene')
            var ball = document.querySelector('.ball')
            ball.style.transform = `rotateY(${-(event.pageX - startingX)/10}deg) rotateX(${(startingY - event.pageY)/10}deg)`
            scene.style.transform = `rotateY(${(event.pageX - startingX)/10}deg) rotateX(${(startingY - event.pageY)/10}deg)`
            into = false
            var p = ball.style.transform
            console.log(p);
            // console.log(`x: ${p.slice(8, 11)}, Y: ${p.slice(-8, -4)}`);
        }
       
    }
})();