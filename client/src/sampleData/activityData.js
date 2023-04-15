const activityData = [
  {
    "activityId": 0,
    "activity": 'Go on a sensory walk.',
    "feelings": [ 'surprised' ]
  },
  {
    "activityId": 1,
    "activity": 'Try planning and cooking a new recipe',
    "feelings": [ 'surprised' ]
  },
  {
    "activityId": 2,
    "activity": 'Take a long shower or bath, and change into clothes that make you feel comfortable and confident!',
    "feelings": [ 'fearful' ]
  },
  {
    "activityId": 3,
    "activity": 'Watch, listen to, or read something that will make you laugh.',
    "feelings": [ 'fearful' ]
  },
  {
    "activityId": 4,
    "activity": 'Lay on the floor for 15 minutes.',
    "feelings": [ 'angry' ]
  },
  {
    "activityId": 5,
    "activity": 'Call someone that you love.',
    "feelings": [ 'angry' ]
  },
  {
    "activityId": 6,
    "activity": 'Write down 10 things you are grateful for.',
    "feelings": [ 'disgusted' ]
  },
  {
    "activityId": 7,
    "activity": 'Look in a mirror and recite (at least) 10 things that you love about yourself.',
    "feelings": [ 'disgusted' ]
  },
  {
    "activityId": 8,
    "activity": 'Smell something soothing.',
    "feelings": [ 'sad' ]
  },
  {
    "activityId": 9,
    "activity": 'Give someone a compliment!',
    "feelings": [ 'sad' ]
  },
  {
    "activityId": 10,
    "activity": 'Write down all of the reasons you are feeling content.',
    "feelings": [ 'happy' ]
  },
  {
    "activityId": 11,
    "activity": 'Complete a meditation exercise.',
    "feelings": [ 'happy' ]
  },
  {
    "activityId": 12,
    "activity": 'Lay on the floor with your legs up a wall for 15 minutes.',
    "feelings": [ 'bad' ]
  },
  {
    "activityId": 13,
    "activity": "Write a 'lightning talk' about something you are passionate about. Then, share it with a friend!",
    "feelings": [ 'bad' ]
  },
  {
    "activityId": 14,
    "activity": 'Count to 100 and then back down to 0.',
    "feelings": [ 'surprised' ]
  },
  {
    "activityId": 15,
    "activity": 'Bake a quiche.',
    "feelings": [ 'surprised' ]
  },
  {
    "activityId": 16,
    "activity": 'Go for a walk and see how many orange-colored things you can find.',
    "feelings": [ 'fearful' ]
  },
  {
    "activityId": 17,
    "activity": 'Listen to a short story.',
    "feelings": [ 'fearful' ]
  },
  {
    "activityId": 18,
    "activity": 'Listen to the sounds of the nature outside your door.',
    "feelings": [ 'angry' ]
  },
  {
    "activityId": 19,
    "activity": 'Yell into a pillow.',
    "feelings": [ 'angry' ]
  },
  {
    "activityId": 20,
    "activity": 'Talk to your best friend about it.',
    "feelings": [ 'disgusted' ]
  },
  {
    "activityId": 21,
    "activity": 'Treat yourself to your favorite local restaurant.',
    "feelings": [ 'disgusted' ]
  },
  {
    "activityId": 22,
    "activity": 'Go read a book or people-watch in a local park.',
    "feelings": [ 'sad' ]
  },
  {
    "activityId": 23,
    "activity": 'Draw, paint, sing - express yourself in a way that is meaningful to you.',
    "feelings": [ 'sad' ]
  },
  {
    "activityId": 24,
    "activity": "Call someone you haven't spoke with in a long time.",
    "feelings": [ 'happy' ]
  },
  {
    "activityId": 25,
    "activity": 'Practice a gratitude meditation',
    "feelings": [ 'happy' ]
  },
  { 
    "activityId": 26, 
    "activity": 'Take a nap.', 
    "feelings": [ 'bad' ] 
  },
  {
    "activityId": 27,
    "activity": 'Do a laughter yoga session.',
    "feelings": [ 'bad' ]
  },
  {
    "activityId": 28,
    "activity": 'write in your journal about what expectations you might have had and how your experience is differing from that projection.',
    "feelings": [ 'surprised' ]
  },
  {
    "activityId": 29,
    "activity": 'Revel in the beauty of this incredible, ever-shifting world we live in.',
    "feelings": [ 'surprised' ]
  },
  {
    "activityId": 30,
    "activity": 'Find somewhere comfy and safe to hide.',
    "feelings": [ 'fearful' ]
  },
  {
    "activityId": 31,
    "activity": 'Grab a set of matches. Take a moment to hold what you are feeling in your mind, taking note of where it lives in your body.  Light the match. Feel the fear reach its limit as the fire reaches its peak, and blow out the fire and the fear is one sharp breath.',
    "feelings": [ 'fearful' ]
  },
  {
    "activityId": 32,
    "activity": 'Listen to some angry music and mosh around your living room.',
    "feelings": [ 'angry' ]
  },
  {
    "activityId": 33,
    "activity": "Write down the meanest, least generous thoughts you're having on a piece of paper. Let it all out. When you're done tear it into little pieces or crumple it up (whichever feels most satisfying) and toss the remnants in the bin outside your home.",
    "feelings": [ 'angry' ]
  },
  {
    "activityId": 34,
    "activity": 'Take a moment to give yourself some grace. Whatever you’re feeling is okay.',
    "feelings": [ 'disgusted' ]
  },
  {
    "activityId": 35,
    "activity": 'Sit under a tree and feel the trunk support you. Look up and watch the leaves sway in the breeze. What color is the sky today? How does the bark feel under your fingers?',
    "feelings": [ 'disgusted' ]
  },
  {
    "activityId": 36,
    "activity": 'Message someone you love to ask them to share something beautiful or good that happened in their day.',
    "feelings": [ 'sad' ]
  },
  {
    "activityId": 37,
    "activity": 'Get yourself some snacks, swaddle yourself in a comfy blanket, and either: listen to really sad music and feel your feelies, OR watch one of your favorite movies (sad or not, up to you).',
    "feelings": [ 'sad' ]
  },
  {
    "activityId": 38,
    "activity": 'Go outside and find a way to give a gift to a stranger. A compliment? A wink? A swipe of your transit card for a free ride? Anything goes.',
    "feelings": [ 'happy' ]
  },
  {
    "activityId": 39,
    "activity": 'Ride your bike to somewhere you love to get yourself a treat! On the way back try no handlebars!!',
    "feelings": [ 'happy' ]
  },
  {
    "activityId": 40,
    "activity": 'Set a 5, 10, or 15-minute timer and tidy your space in the easiest way possible. You can stop when it goes off even mid-task. Anything counts. Nice work!',
    "feelings": [ 'bad' ]
  },
  {
    "activityId": 41,
    "activity": 'Put on an irresistible song and wiggle your body the weirdest way you can. Decide on the movements based on listening to how your body wants to move, stretch, and shake out, NOT on if the dance moves are good. The more like Ace Ventura: Pet Detective meets hippie at Woodstock the better',
    "feelings": [ 'bad' ]
  }, 
  {
    "activityId": 42,
    "activity": "Make up and sing a song in the weirdest voice. Play around with different volume levels and pitches and have fun!",
    "feelings": [
      "surprised",
    ]
  },
  {
    "activityId": 43,
    "activity": "Create a vision board: Make a visual representation of your goals and aspirations to help keep you motivated and excited.",
    "feelings": [
      "surprised",
    ]
  },
  {
    "activityId": 44,
    "activity": "Set a timer for 5 minutes to focus on your breath.",
    "feelings": [
      "fearful",
    ]
  },
  {
    "activityId": 45,
    "activity": "Create a 'fear buddy': Create/find a stuffed animal that represents your fear. Talk to it and give it a silly name. This can help you externalize your fear and view it in a more playful way.",
    "feelings": [
      "fearful",
    ]
  },
  {
    "activityId": 46,
    "activity": "Punch and hit your pillow as much as you want to work out some energy.",
    "feelings": [
      "angry",
    ]
  },
  {
    "activityId": 47,
    "activity": "Find an open space and have a screaming contest with a friend",
    "feelings": [
      "angry",
    ]
  },
  {
    "activityId": 48,
    "activity": "Create an 'awful art' piece: Create a piece of art that's intentionally bad or ugly, using unusual colors or shapes. This can help you to accept that what you are feeling is okay.",
    "feelings": [
      "disgusted",
    ]
  },
  {
    "activityId": 49,
    "activity": "If it's sunny outside, go lay in the sun and focus on the feeling of the sunshine beaming onto your body.",
    "feelings": [
      "disgusted",
    ]
  },
  {
    "activityId": 50,
    "activity": "Guy buy yourself a latte.",
    "feelings": [
      "sad",
    ]
  },
  {
    "activityId": 51,
    "activity": "Invite friends over to have a pity party. Share sad stories and eat comfort food.",
    "feelings": [
      "sad",
    ]
  },
  {
    "activityId": 52,
    "activity": "Have a silly photoshoot: Grab some props and snap some fun and goofy pictures of yourself to capture your happiness in the moment.",
    "feelings": [
      "happy",
    ]
  },
  {
    "activityId": 53,
    "activity": "Put on a silly outfit, your favorite playlist, and perform the weirdest dance moves you can conjure.",
    "feelings": [
      "happy",
    ]
  },
  {
    "activityId": 54,
    "activity": "Create a whimsical talisman: Craft a silly and unusual object or trinket that represents your bad mood. This can be anything from a miniature rubber chicken to a glittery rock. Keep it with you as a reminder to take things less seriously and embrace the playful side of life.",
    "feelings": [
      "bad",
    ]
  },
  {
    "activityId": 1,
    "activity": "Create a cozy blanket fort with lots of pillows, and take a nap or watch your favorite movie.",
    "feelings": [
      "bad",
    ]
  }
];

export default activityData;