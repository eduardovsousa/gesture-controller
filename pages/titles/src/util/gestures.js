const { GestureDescription, Finger, FingerCurl } = window.fp;
  
const ScrollDownGesture = new GestureDescription('scroll-down'); // ✊️
const ScrollUpGesture = new GestureDescription('scroll-up'); // 🖐
const RockGesture = new GestureDescription('rock'); // 🤘

  
// Scroll down
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Scroll up
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    ScrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Rock
// -----------------------------------------------------------------------------

RockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl , 1.0);
RockGesture.addCurl(Finger.Index, FingerCurl.NoCurl , 1.0);
RockGesture.addCurl(Finger.Pink, FingerCurl.NoCurl , 1.0);

for (let finger of [Finger.Thumb, Finger.Index, Finger.Pinky]) {
  RockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  RockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}

const knowGestures = [
  ScrollDownGesture,
  ScrollUpGesture,
  RockGesture,
]

const gestureStrings = {
  'scroll-up': '🖐',
  'scroll-down': '✊️',
  'rock': '🤘'
}

export {
  knowGestures,
  gestureStrings
}