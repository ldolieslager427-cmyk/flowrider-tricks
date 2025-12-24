const bodyboardTricks = [
  // BEGINNER
  {
    id: "bb-prone-basic",
    name: "Prone Riding / Basics",
    level: "Beginner",
    how: "Keep your chest on the board, stay centered, and control your speed.",
    pre: [],
    video: "TBD"
  },
  {
    id: "bb-carves",
    name: "Basic Carves",
    level: "Beginner",
    how: "Carve left and right across the wave while maintaining speed.",
    pre: ["Prone Riding / Basics"],
    video: "TBD"
  },
  {
    id: "bb-pump",
    name: "Pumping",
    level: "Beginner",
    how: "Move your body up and down the wave to gain speed without drifting up too high.",
    pre: ["Basic Carves"],
    video: "TBD"
  },

  // INTERMEDIATE
  {
    id: "bb-180",
    name: "180 Spin",
    level: "Intermediate",
    how: "Rotate your shoulders and hips while keeping centered to spin 180°.",
    pre: ["Pumping", "Basic Carves"],
    video: "TBD"
  },
  {
    id: "bb-prone-360",
    name: "Prone 360",
    level: "Intermediate",
    how: "Use your shoulders and hips to spin 360° while keeping speed centered on the wave.",
    pre: ["180 Spin", "Pumping"],
    video: "https://www.youtube.com/embed/WsnbU_lamE0"
  },
  {
    id: "bb-elbow-drag",
    name: "Elbow Drag",
    level: "Intermediate",
    how: "Drag your elbow into the wave face while carving for control and style.",
    pre: ["Pumping", "Basic Carves"],
    video: "TBD"
  },
  {
    id: "bb-knee-slide",
    name: "Knee Slide",
    level: "Intermediate",
    how: "Drag one knee while sliding across the wave face to control speed and direction.",
    pre: ["Elbow Drag"],
    video: "TBD"
  },

  // ADVANCED
  {
    id: "bb-air-roll",
    name: "Air Roll",
    level: "Advanced",
    how: "Launch off the wave and rotate in the air while keeping your body balanced.",
    pre: ["Prone 360", "Pumping"],
    video: "TBD"
  },
  {
    id: "bb-el-rollo",
    name: "El Rollo",
    level: "Advanced",
    how: "Perform a front flip off the wave, landing smoothly back on the face.",
    pre: ["Air Roll"],
    video: "TBD"
  },
  {
    id: "bb-invert",
    name: "Invert",
    level: "Advanced",
    how: "Perform a vertical flip at the top of the wave and land back on the face.",
    pre: ["Air Roll"],
    video: "TBD"
  },
  {
    id: "bb-540",
    name: "540 Spin",
    level: "Advanced",
    how: "Perform a 540° spin using speed and pumping off the wave.",
    pre: ["Prone 360"],
    video: "TBD"
  },
  {
    id: "bb-720",
    name: "720 Spin",
    level: "Advanced",
    how: "Perform a 720° spin with strong pump and core control.",
    pre: ["540 Spin"],
    video: "TBD"
  },

  // EXPERT
  {
    id: "bb-invert-360",
    name: "Invert 360",
    level: "Expert",
    how: "Combine a vertical invert with a 360° spin and land smoothly.",
    pre: ["Invert", "Prone 360"],
    video: "TBD"
  },
  {
    id: "bb-double-roll",
    name: "Double Roll",
    level: "Expert",
    how: "Perform two consecutive front flips off the wave, landing cleanly.",
    pre: ["El Rollo", "Air Roll"],
    video: "TBD"
  }
];

const standupTricks = [
  // BEGINNER
  {
    id: "su-stance",
    name: "Basic Stance",
    level: "Beginner",
    how: "Stand comfortably in regular or goofy stance, keep knees bent and balanced.",
    pre: [],
    video: "TBD"
  },
  {
    id: "su-carves",
    name: "Toe-side & Heel-side Carve",
    level: "Beginner",
    how: "Carve smoothly across the wave using both edges of the board.",
    pre: ["Basic Stance"],
    video: "TBD"
  },
  {
    id: "su-pump",
    name: "Pumping",
    level: "Beginner",
    how: "Gain speed by shifting weight up and down the wave while staying balanced.",
    pre: ["Toe-side & Heel-side Carve"],
    video: "TBD"
  },

  // LOWER INTERMEDIATE
  {
    id: "su-180",
    name: "180 Slide",
    level: "Lower Intermediate",
    how: "Rotate your board 180° while sliding across the wave.",
    pre: ["Pumping", "Toe-side & Heel-side Carve"],
    video: "TBD"
  },
  {
    id: "su-tail-slide",
    name: "Tail Slide",
    level: "Lower Intermediate",
    how: "Slide off the back of the wave with control, balancing on the tail.",
    pre: ["180 Slide"],
    video: "TBD"
  },
  {
    id: "su-wall-tap",
    name: "Wall Tap",
    level: "Lower Intermediate",
    how: "Tap the wall lightly with your board to maintain flow and change direction.",
    pre: ["Tail Slide"],
    video: "TBD"
  },

  // INTERMEDIATE
  {
    id: "su-360",
    name: "360 Spin",
    level: "Intermediate",
    how: "Rotate a full 360° using shoulders and hips while keeping balanced.",
    pre: ["180 Slide", "Pumping"],
    video: "TBD"
  },
  {
    id: "su-switch",
    name: "Switch Riding",
    level: "Intermediate",
    how: "Ride the board in the opposite stance smoothly.",
    pre: ["360 Spin"],
    video: "TBD"
  },
  {
    id: "su-nose-slide",
    name: "Nose Slide",
    level: "Intermediate",
    how: "Slide on the nose of your board while maintaining balance.",
    pre: ["Tail Slide"],
    video: "TBD"
  },
  {
    id: "su-rail-slide",
    name: "Rail Slide",
    level: "Intermediate",
    how: "Slide along the edge (rail) of the board across the wave.",
    pre: ["Nose Slide", "Tail Slide"],
    video: "TBD"
  },

  // ADVANCED
  {
    id: "su-ollie",
    name: "Ollie",
    level: "Advanced",
    how: "Pop the board into the air by lifting the tail and jumping.",
    pre: ["Pumping", "180 Slide"],
    video: "TBD"
  },
  {
    id: "su-air-180",
    name: "Air 180",
    level: "Advanced",
    how: "Perform an ollie and rotate 180° in the air before landing.",
    pre: ["Ollie", "180 Slide"],
    video: "TBD"
  },
  {
    id: "su-540",
    name: "540 Spin",
    level: "Advanced",
    how: "Perform a 540° spin using speed and body rotation.",
    pre: ["360 Spin"],
    video: "TBD"
  },
  {
    id: "su-switch-360",
    name: "Switch 360",
    level: "Advanced",
    how: "Perform a 360° spin while riding in switch stance.",
    pre: ["Switch Riding", "360 Spin"],
    video: "TBD"
  },
  {
    id: "su-pop-shoveit",
    name: "Pop Shove-It",
    level: "Advanced",
    how: "Pop the tail and scoop the board 180° underneath you.",
    pre: ["Ollie", "180 Slide"],
    video: "https://www.youtube.com/embed/2gcwho01y88"
  },

  // EXPERT
  {
    id: "su-720",
    name: "720 Spin",
    level: "Expert",
    how: "Perform a 720° spin using strong pump and perfect rotation.",
    pre: ["540 Spin"],
    video: "TBD"
  },
  {
    id: "su-900",
    name: "900 Spin",
    level: "Expert",
    how: "Perform a 900° spin for advanced mastery.",
    pre: ["720 Spin"],
    video: "TBD"
  },
  {
    id: "su-switch-540",
    name: "Switch 540",
    level: "Expert",
    how: "Perform a 540° spin while riding switch stance.",
    pre: ["Switch 360", "540 Spin"],
    video: "TBD"
  },
  {
    id: "su-air-shoveit",
    name: "Air Shove-It",
    level: "Expert",
    how: "Perform a pop shove-it while airborne.",
    pre: ["Pop Shove-It", "Ollie"],
    video: "TBD"
  },
  {
    id: "su-combo-spin-slide",
    name: "Spin → Slide Combo",
    level: "Expert",
    how: "Combine a spin trick directly into a slide trick smoothly.",
    pre: ["Mastery of spins", "Mastery of slides"],
    video: "TBD"
  }
];
