let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Future engineer and technology for social good enthusiast')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  
