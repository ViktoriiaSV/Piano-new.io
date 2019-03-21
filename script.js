
function myFunction(event) {
    let x =  event.key.toLowerCase();
    document.getElementById("sound-"+x).play();

}

function playAudio (e, note) {
    const soundSource = document.getElementById("sound-" + note);
    soundSource.play();
    e.target.style.boxShadow = '1px 1px 3px 3px green';
}
















