import { v4 as uuidv4 } from 'uuid'

export const exerciseData = [
  {
    id: uuidv4(),
    name: 'Arnold Press',
    type: 'Shoulder',
    instructions:
      '1. Sit upright on a bench and hold a dumbell in each hand, at chest level. Keep your palms facing your body as if you are performing a dumbbell curl.\n \n2. Raise the dumbbells upwards while simultaneously rotating your palms until they face forwards, until your arms are fully extended straight above you.\n \n3. After pausing briefly, lower the dumbbells while rotating your palms towards you back to the starting position.',
    image: 'https://wger.de/media/exercise-images/228/Arnold-press-2.png',
  },
  {
    id: uuidv4(),
    name: 'Bench Press',
    type: 'Chest',
    instructions:
      '1. Lie flat on the bench holding the barbell with a shoulder width pronated grip.\n \n2. Retract scapula and have elbows between 45 to 90 degree angle. An advanced tip is to tuck the shoulders down into the sockets and driven back.\n \n3. Lift bar from the rack and hold above the chest with arms extended.\n \n4. Breathe in and lower bar to the middle chest.\n \n5. After pausing at the bottom, push the bar towards the starting position squeezing the chest.',
    image: 'https://wger.de/media/exercise-images/192/Bench-press-2.png',
  },
  {
    id: uuidv4(),
    name: 'Bent Over Row',
    type: 'Back',
    instructions:
      '1. Holding the barbell with a pronated grip, bend the legs and tilt the torso wit a straight back.\n \n2.Flexing the core, keep head in neutral position, pull the barbell towards your stomach.\n \n3. Squeeze your back as you breath out at the top position.\n \n4. Inhale and lower the barbell to the starting position.\n \n',
    image:
      'https://wger.de/media/exercise-images/70/Reverse-grip-bent-over-rows-2.png',
  },
  {
    id: uuidv4(),
    name: 'Chest Fly',
    type: 'Chest',
    instructions:
      '1. Sitting with the pad againt the back, grip the handles of the machine.\n \n2. Slightly bend the elbows and squeeze the chest to bring the handles together in front of the chest.\n \n3. Return to the starting position while inhaling.',
    image: 'https://wger.de/media/exercise-images/30/Butterfly-machine-2.png',
  },
  {
    id: uuidv4(),
    name: 'Bicep Curl',
    type: 'Arms',
    instructions:
      '1. Stand while holding the bar at shoulder width with an underhand grip and elbows touching the side of the torso.\n \n2. Holding the upper arm stationary, curl barbell u with palm facing foward. Lift the bar towrards the shoulder until the bicep is fully contracted. Hold this position for a second and squeeze the bicep.\n \n3. Lower the bar to the starting position.',
    image: 'https://wger.de/media/exercise-images/3/Standing-biceps-curl-2.png',
  },
  {
    id: uuidv4(),
    name: 'Deadlift',
    type: 'Back',
    instructions:
      '1. Approach the bar so it is positioned across the center of the foot.\n \n2. Place the feet shoulder width apart and grip the bar at shoulder width apart.\n \n3. Lower hips and bend knees to bring shins into the bar. Lift the chest and take a deep breath to brace the core(should be braced the entrie movement). Retract shoulder blades to take the slack out of the bar.\n \n4. Pull bar upward extending hips and straightening the torso.\n \n5. Return weight to the floor in a controlled motion by breaking at the hips and bending the legs.',
    image: 'https://wger.de/media/exercise-images/9/Dead-lifts-2.png',
  },
  {
    id: uuidv4(),
    name: 'Decline Bench Press',
    type: 'Chest',
    instructions:
      '1. Lie on a decline bench, securing legs on the end of the bench.\n \n2. Lift the bar off the rack above the chest with arms straight.\n \n3. Retract scapula and have elbows between 45 to 90 degree angle. An advanced tip is to tuck the shoulders down into the sockets and driven back.\n \n4. Breathe in and lower bar to the middle chest.\n \n5. After pausing at the bottom, push the bar towards the starting position squeezing the chest.',
    image: 'https://wger.de/media/exercise-images/17/Decline-bench-press-2.png',
  },
  {
    id: uuidv4(),
    name: 'Flat Leg Raise',
    type: 'Core',
    instructions:
      '1. Lie on a mat with legs extended in front, place hands under your glutes.\n \n2. Exhale, keepign the core tight as you lift legs until they are perpendicular with the floor.\n \n3. Lower legs back to the mat without touching the floor, keeping the core braced.',
    image: 'https://wger.de/media/exercise-images/34/Leg-raises-1.png',
  },
  {
    id: uuidv4(),
    name: 'Front Squat',
    type: 'Legs',
    instructions:
      '1. Set the barbell at slightly below shoulder level.\n \n2. With a braced core, chest up, create a shelf with the front of the delt with the bbar touching the clavicle and neck. The fingers should rest under the bar with elbows pointed foward and up. Unrack the bar and step back to a position with feet shoulder with apart.\n \n3. Keeping core braced, chest up and head neutral, break at the hips keeping pressur on the midfoot and descend into a squat. Continue lowering the body until the thights are at or past parallel with the ground.\n \n4. Exhaling, drive through the heels and midfoot, pushing knees outward until back to starting position.',
    image:
      'https://wger.de/media/exercise-images/191/Front-squat-2-857x1024.png',
  },
  {
    id: uuidv4(),
    name: 'Good Morning',
    type: 'Back',
    instructions:
      '1. Pace the bar across the back with knees slightly bent.\n \n2. Keeping core tight and back straight, break at the hips and bend down until near parallel.\n \n3. Reverse motion by extending through the hips and bringing the chest back up.',
    image: 'https://wger.de/media/exercise-images/50/Good-mornings-1.png',
  },
  {
    id: uuidv4(),
    name: 'Hammer Curl',
    type: 'Arms',
    instructions:
      '1. Stand with a dumbell in each hand and with elbows touching the side of the torso\n \n2. Using biceps, pull forearms and hands upward until fully contracted.\n \n3. Squeeze biceps and slowly lower back to the starting position.',
    image: 'https://wger.de/media/exercise-images/46/Bicep-hammer-curl-2.png',
  },
  {
    id: uuidv4(),
    name: 'Hack Squat',
    type: 'Legs',
    instructions:
      '1. With the back and houlders against the pads of the machine, place feet shoulder width apart and slightly in front of the torso.\n \n2. Bracing core and keeping chest up, push with the feet until the weight is supported by the shoulders. Unlock the hack squat by disengaging the safety bars.\n \n3. Slowly lower the squat by bracking at the hips until the thighs and calves make a 90 degree angle.\n \n4. When at the bottom of the squat, push through the heels and midfoot while exhaling to return to the starting position.',
    image:
      'https://wger.de/media/exercise-images/130/Narrow-stance-hack-squats-2-1024x721.png',
  },
  {
    id: uuidv4(),
    name: 'Incline Bench Press',
    type: 'Back',
    instructions:
      '1. Lie on the incline bench holding the dumbbells with a shoulder width pronated grip.\n \n2. Retract scapula and have elbows between 45 to 90 degree angle. An advanced tip is to tuck the shoulders down into the sockets and driven back.\n \n3. Breathe in and lower dumbbells to the middle chest.\n \n4. After pausing at the bottom, push dumbbells towards the starting position squeezing the chest.',
    image: 'https://wger.de/media/exercise-images/16/Incline-press-1.png',
  },
  {
    id: uuidv4(),
    name: 'Lat Pulldow',
    type: 'Back',
    instructions:
      '1. Sit on the pull down machine with knee pads adjusted to provide support, preventing your body from being pulled out of position.\n \n2. Grip the pull down bar with a pronated grip slightly outside of shouler width.\n \n3. As you exhale, pull the bar down until it touches the upper chest.\n \n4. Pause and squeeze the back muscles.\n \n5. Slowly bring the bar back to the starting position with the lats fully stretched.',
    image:
      'https://wger.de/media/exercise-images/244/Close-grip-front-lat-pull-down-2.png',
  },
  {
    id: uuidv4(),
    name: 'Lateral Raise',
    type: 'Shoulder',
    instructions:
      '1. Start with the dumbbells resting on the side of the tigh. The arm should be slighty bent.\n \n2. Using your shoulder, lift the arm in a semi-circular motion until slightly above parallel.\n \n3. Return to the starting position slowly while maintaining a tight core.',
    image:
      'https://wger.de/media/exercise-images/148/lateral-dumbbell-raises-large-1.png',
  },
  {
    id: uuidv4(),
    name: 'Leg Press',
    type: 'Legs',
    instructions:
      '1. Place feet shoulder width apart in a position where the knees would not pass the feet at the bottom of the leg press movement.\n \n2.Push through the heel and midfoot and lower the safety bars, making sure to brace the core and keeping knees pointed slightly outward.\n \n3. Lower the weight platform until the legs create a 90 degree angle.\n \n4. Push using the quads to the starting position, making sure knees are not locked.',
    image: 'https://wger.de/media/exercise-images/6/Leg-press-1-1024x670.png',
  },
  {
    id: uuidv4(),
    name: 'Overhead Press',
    type: 'Shoulder',
    instructions:
      '1. Start with barbell at slightly below chest level.\n \n2. With arms at shoulder width, unrack the bar and step backward.\n \n3. Flexing the glutes and keeping the core tight, push the barbell upwards over the head as you exhale.\n \n4. Lower the bar towards the starting position as you inhale.',
    image:
      'https://wger.de/media/exercise-images/119/seated-barbell-shoulder-press-large-1.png',
  },
  {
    id: uuidv4(),
    name: 'Preacher Curl',
    type: 'Arms',
    instructions:
      '1. Adjust the preacher bench to the appropriate height and hold a barbell with upper arm placed against the pad.\n \n2. Breathing out, contract the bicep and pull the barbell towards the upper chest.\n \n3. Hold at the upper position while contracting the bicep and then slowly return to the starting position.',
    image: 'https://wger.de/media/exercise-images/193/Preacher-curl-3-2.png',
  },
  {
    id: uuidv4(),
    name: 'Reverse Fly',
    type: 'Shoulder',
    instructions:
      '1. Adjust the pulleys so that the handles are at chest height.\n \n2. Reach across your body and grab the left handle with your right hand and grab the right handle with your left hand.\n \n3. Position your arms straight ahead while holding onto each handle. This is your starting position.\n \n4. Pull on the handles by movin your hands out to the side and back and focusing on pulling the weight using your rear delts.\n \n5. Once fully extended to the side, hold the position for a brief moment and slowly return to the starting position.',
    image:
      'https://wger.de/media/exercise-images/47/Lying-rear-lateral-raise-1.png',
  },
  {
    id: uuidv4(),
    name: 'Shoulder Press',
    type: 'Shoulder',
    instructions:
      '1. Adjust seat so that th handles are around shoulder height.\n \n2. Grab the handles with an overhand grip.\n \n3. Inhale and press the weight upwards until arms are fully extended.\n \n4. Lower into starting position.',
    image:
      'https://wger.de/media/exercise-images/152/seated-shoulder-press-machine-large-1.png',
  },
  {
    id: uuidv4(),
    name: 'Shrug',
    type: 'Back',
    instructions:
      '1. With feet shoulder with and hands at shoulder width position pick up the bar with an overhand grip.\n \n2. Raise your shoulders up, squeezing your upper back and traps together.\n \n3. Hold at the retracted position while keeping the head and neck in a neutral position.',
    image: 'https://wger.de/media/exercise-images/137/Barbell-shrugs-2.png',
  },
  {
    id: uuidv4(),
    name: 'Squat',
    type: 'Legs',
    instructions:
      '1. Place the bar between the traps and the upper back with the hands shoulder width apart.\n \n2. Place the feet shoulder width apart and descend by breaking at the hips and sitting backwards.\n \n3. Keep the head in a neutral position, back and spine in a straight and neutral position, the core flexed and knees pushed slighty outwards.\n \n4. Descend to the bottom where thighs are parallel to the floor.\n \n.5. Push through the heel and middle foot to bring yourself back to starting position.',
    image: 'https://wger.de/media/exercise-images/111/Wide-stance-squat-1.gif',
  },
  {
    id: uuidv4(),
    name: 'T-Bar Row',
    type: 'Back',
    instructions:
      '1. Put weight on one end of a barbell and secure the other end in a non stationary spot.\n \n2. Grab bar with both hands below the weight.\n \n3. Break at the hips and bend fowards until the torso is parallel with the barbell.\n \n4. Pull bar upward toward the chest while squeezing the back and holding at the top.\n \n5. Lower bar slowly towards the starting position.',
    image: 'https://wger.de/media/exercise-images/76/T-bar-row-2.png',
  },
  {
    id: uuidv4(),
    name: 'Triceps Extension',
    type: 'Arms',
    instructions:
      '1. Grip the handle attachment with a supinated grip, securing the elbow to the side of the body.\n \n2. Extend forearm to fully extend arm while flexing the tricep and exhaling.\n \n3. Return to the starting position while inhaling.',
    image:
      'https://wger.de/media/exercise-images/45/Seated-triceps-press-2.png',
  },
  {
    id: uuidv4(),
    name: 'Upright Row',
    type: 'Shoulder',
    instructions:
      '1. Hold barbell with arms shoulder width and grip with a pronated grip.\n \n2. Use shoulders to lift the barbell as you exhale.\n \n3. Elbows should lead movement and the bar should be close to the body as it is elevated.\n \n4. Continue to lift until bar is chin level. Hold at this position as you contrat the shoulder muscles.\n \n5. Lower to starting position.',
    image:
      'https://wger.de/media/exercise-images/62/Barbell-upright-rows-1.png',
  },
  {
    id: uuidv4(),
    name: 'Chin Up',
    type: 'Arms',
    instructions:
      '1. Place hands on the bar with palms facing yourself and a grip slightly within shoulder width.\n \n2. Retract the shoulders and tuck them down and keep the core tight and back slightly arched.\n \n3. Breating out, pull the torso upward until the head is above the bar keeping elbows against the side of the body.\n \n4. Lower back to the starting position while breathing in.',
    image: 'https://wger.de/media/exercise-images/36/Chin-ups-1.png',
  },
]
