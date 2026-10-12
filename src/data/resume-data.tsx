import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { SendIcon } from "lucide-react";

/**
 * House style: standard sentence case for copy, proper nouns and product names
 * written the way their owners write them, acronyms uppercase. Everything is
 * rendered as authored; there is no CSS text-transform.
 */
export const RESUME_DATA = {
  name: "Kirill Rybkov",
  initials: "KR",
  locations: [
    {
      label: "🇳🇱 Netherlands",
      url: "https://www.google.com/maps/place/Enschede",
    },
  ],
  about:
    "Bachelor Advanced Technology student at the University of Twente. Wrote my first code on an Arduino at 10 and did my first crypto hackathon at 14. Now Chief of Software at RISE and co-founder of Risk on Radar.",
  avatarUrl: "./image.png",
  contact: {
    email: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Krlberg",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kirillrybkov/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/krlberg",
        icon: XIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/krlberg",
        icon: SendIcon,
      },
    ],
  },

  skillCategories: [
    {
      id: "embedded",
      title: "Electronics",
      skills: [
        { label: "Arduino", url: "https://www.arduino.cc/" },
        {
          label: "ESP32",
          url: "https://www.espressif.com/en/products/socs/esp32",
        },
        { label: "Raspberry Pi", url: "https://www.raspberrypi.com/" },
        {
          label: "I2C sensors",
          url: "https://learn.sparkfun.com/tutorials/i2c/all",
        },
        {
          label: "Signal conditioning",
          url: "https://en.wikipedia.org/wiki/Signal_conditioning",
        },
        {
          label: "RC electronics",
          url: "https://en.wikipedia.org/wiki/Electronic_speed_control",
        },
      ],
    },
    {
      id: "mechanical",
      title: "Mechanical",
      skills: [
        { label: "Onshape", url: "https://www.onshape.com/en/" },
        { label: "SolidWorks", url: "https://www.solidworks.com/" },
        { label: "KiCad", url: "https://www.kicad.org/" },
        {
          label: "3D printing",
          url: "https://en.wikipedia.org/wiki/3D_printing",
        },
        {
          label: "Simulink",
          url: "https://www.mathworks.com/products/simulink.html",
        },
      ],
    },
    {
      id: "software",
      title: "Software",
      skills: [
        { label: "Python", url: "https://www.python.org/" },
        { label: "C/C++", url: "https://isocpp.org/" },
        { label: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
        { label: "React", url: "https://react.dev/learn" },
        { label: "Next.js", url: "https://nextjs.org/docs" },
        {
          label: "MATLAB",
          url: "https://www.mathworks.com/products/matlab.html",
        },
        { label: "Git", url: "https://github.com/Krlberg" },
        {
          label: "Claude Code",
          url: "https://www.claude.com/product/claude-code",
        },
      ],
    },
    {
      id: "blockchain",
      title: "Blockchain",
      skills: [
        { label: "Solidity", url: "https://soliditylang.org/" },
        { label: "Foundry", url: "https://www.getfoundry.sh/" },
        { label: "Viem", url: "https://v1.viem.sh/docs/getting-started.html" },
        { label: "Radix dApp Toolkit", url: "https://docs.radixdlt.com/" },
      ],
    },
  ],

  // Reverse-chronological by start date.
  work: [
    {
      company: "RISE",
      link: "https://www.riseteam.nl/",
      badges: ["C++", "F Prime"],
      title: "Chief of Software",
      start: "Sep 2026",
      end: undefined,
      description:
        "Developing various systems required for the operations of a model rocket using the F Prime framework.",
    },
    {
      company: "Risk on Radar",
      link: "https://riskonradar.com",
      articleLink: "https://www.linkedin.com/company/riskonradar/",
      articleLabel: "LinkedIn",
      badges: ["FMEA", "Reliability", "Next.js", "TypeScript"],
      title: "Co-founder & CTO",
      start: "Apr 2026",
      end: undefined,
      description:
        "A platform that turns scattered knowledge on why engineered parts fail into one searchable database. As CTO I designed the architecture of the app and lead the technical side.",
    },
    {
      company: "Lattic3",
      link: "https://lattic3.xyz",
      articleLink: "https://www.radixdlt.com/blog/meet-the-project-lattic3",
      articleLabel: "Radix feature",
      badges: ["DeFi", "Flash loans", "Next.js"],
      title: "Co-founder",
      start: "Oct 2024",
      end: "Aug 2025",
      description:
        "Started as Radish, our 2nd place project at EBC10, and grew into a strategy layer on Radix that packages leveraged yield strategies into one-click actions. I led the frontend and marketing while my co-founder wrote the Scrypto contracts. We received $20k in Radix grants and launched on mainnet with the Yield Multiplier, which loops lending positions using flash loans.",
    },
  ],

  engineeringProjects: [
    {
      company: "Active suspension system",
      link: "https://drive.google.com/drive/folders/1hprdeT0JMgE3-AiZxd2pWb7bdW5ykoQd",
      badges: ["Arduino", "IMU", "PID", "CAD", "3D printing"],
      title: "Completed during EPQ A-Level",
      start: "",
      end: "",
      description: (
        <p>
          Active suspension system for a 1/10 off-road RC car, built to stop it
          rolling over or losing grip on uneven ground. An Arduino Nano reads
          the tilt from an MPU6050 IMU, and a PID controller I wrote in C++
          drives servos that shift the car&apos;s centre of mass and keep all
          four wheels on the ground. I designed and 3D printed the linkages and
          mounts, then tuned the controller on slopes and rough terrain.
        </p>
      ),
    },
    {
      company: "Autonomous fire detection aircraft",
      link: undefined,
      badges: ["UAV", "Flight controller", "GPS", "Raspberry Pi"],
      title: "High school team project",
      start: "",
      end: "",
      description: (
        <p>
          Fixed-wing drone designed to spot wildfires early in Catalonia. I was
          in charge of the electronics and the build, which meant wiring up the
          SpeedyBee flight controller, power system, GPS, receiver and a
          Raspberry Pi, and fitting it all into the airframe.
        </p>
      ),
    },
    {
      company: "Piezoelectric accelerometer",
      link: "https://drive.google.com/file/d/12hf3-xHmd9VUs-cSkcsxMcEc7xe-uF2a/view?usp=sharing",
      badges: ["Charge amplifier", "Arduino", "Signal conditioning"],
      title: "University team project",
      start: "",
      end: "",
      description: (
        <p>
          University project: an accelerometer for measuring subwoofer
          vibrations, built from a piezo ring and a brass mass inside a 3D
          printed housing. I worked on the electronics and software. The piezo
          only gives off a tiny charge, so I used a charge amplifier to turn it
          into a voltage, biased to 2.5 V so it fits the Arduino&apos;s 0 to 5 V
          input and filtered to the subwoofer&apos;s frequency range. We then
          calibrated it on a shaker against a reference accelerometer.
        </p>
      ),
    },
  ],

  education: {
    university: {
      school: "University of Twente",
      schoolUrl: "https://www.utwente.nl/en/",
      degree: "Bachelor Advanced Technology",
      degreeUrl:
        "https://www.utwente.nl/en/education/bachelor/programmes/advanced-technology/",
      start: "Sep 2025",
      end: "Sep 2028",
      gpa: "7.2 / 10",
      courseGroups: [],
    },
    secondary: {
      school: "The British School of Barcelona",
      schoolUrl: "https://www.britishschoolbarcelona.com/",
      degree: "A-Levels & IGCSE",
      degreeUrl: "",
      start: "Sep 2021",
      end: "Jun 2025",
      summary: "A*A*AAA",
      courseGroups: [],
    },
  },

  /**
   * Courses grouped by discipline rather than by year or semester. Completed
   * entries come from the transcript of records; the rest from the 2025-2026
   * AT programme curriculum. Grades are deliberately not stored here.
   *
   * Descriptions are my own one-line summaries, not official UT text: Osiris
   * is client-rendered with no public API, so nothing could be sourced
   * verbatim. Correct anything that reads wrong.
   */
  curriculum: {
    totalCredits: 180,
    completedCredits: 60,
    disciplines: [
      {
        id: "maths",
        title: "Mathematics & computation",
        blurb: "The analytical backbone, and the numerical tools built on it.",
        courses: [
          {
            name: "Calculus 1",
            ec: 4,
            done: true,
            desc: "Limits, differentiation, integration and series in one variable.",
          },
          {
            name: "Calculus 2",
            ec: 4,
            done: true,
            desc: "Multivariable calculus: partial derivatives, multiple integrals, vector fields.",
          },
          {
            name: "Linear Algebra",
            ec: 3,
            done: true,
            desc: "Vectors, matrices, eigenvalues and linear transformations.",
          },
          {
            name: "Error Analysis & Programming Skills",
            ec: 3,
            done: true,
            desc: "Measurement uncertainty and error propagation, taught alongside MATLAB.",
          },
          {
            name: "Statistics for Engineers",
            ec: 3,
            done: false,
            desc: "Probability, distributions, hypothesis testing and regression.",
          },
          {
            name: "Finite Element Methods",
            ec: 4,
            done: false,
            desc: "Numerical solution of field and structural problems by discretisation.",
          },
          {
            name: "Machine Learning",
            ec: 3,
            done: false,
            desc: "Supervised and unsupervised learning applied to engineering data.",
          },
          {
            name: "Computational Thinking",
            ec: 4,
            done: false,
            desc: "Chosen elective: decomposing problems into algorithms and data structures.",
          },
        ],
      },
      {
        id: "mechanics",
        title: "Mechanics & dynamics",
        blurb: "How bodies move and how systems respond over time.",
        courses: [
          {
            name: "Mechanics",
            ec: 4,
            done: true,
            desc: "Statics and dynamics of rigid bodies: forces, moments, motion.",
          },
          {
            name: "Mechanics Lab",
            ec: 4,
            done: true,
            desc: "Experimental verification of mechanics theory in the lab.",
          },
          {
            name: "System Dynamics 1",
            ec: 3,
            done: true,
            desc: "Modelling dynamic systems and their response in the time domain.",
          },
          {
            name: "System Dynamics 2",
            ec: 4,
            done: true,
            desc: "Frequency-domain analysis, transfer functions and feedback.",
          },
          {
            name: "System Dynamics 3",
            ec: 4,
            done: false,
            desc: "Continues System Dynamics 1 and 2: modelling and validating physical systems.",
          },
        ],
      },
      {
        id: "signals",
        title: "Signals & modelling",
        blurb: "Describing systems well enough to predict what they will do.",
        courses: [
          {
            name: "Signals",
            ec: 4,
            done: false,
            desc: "Continuous and discrete signals, Fourier analysis, sampling and filtering.",
          },
          {
            name: "Engineering System Dynamics",
            ec: 5,
            done: false,
            desc: "Systems and Control module: modelling multi-domain dynamic systems.",
          },
          {
            name: "Control Engineering",
            ec: 5,
            done: false,
            desc: "Systems and Control module: feedback design, stability and controller tuning.",
          },
        ],
      },
      {
        id: "electronics",
        title: "Electronics & fields",
        blurb: "Circuits, measurement, and the electromagnetics underneath.",
        courses: [
          {
            name: "Basic Electronics and Instrumentation",
            ec: 4,
            done: true,
            desc: "Analogue circuits, op-amps, and turning sensor output into measurement.",
          },
          {
            name: "Electro- and Magnetostatics",
            ec: 5,
            done: false,
            desc: "Static electric and magnetic fields; Maxwell in the steady state.",
          },
          {
            name: "Electro- and Magnetodynamics",
            ec: 3,
            done: false,
            desc: "Time-varying fields, waves and propagation.",
          },
        ],
      },
      {
        id: "materials",
        title: "Materials & physics",
        blurb: "What materials are made of, how they behave, why they fail.",
        courses: [
          {
            name: "Structures and Properties of Materials",
            ec: 3,
            done: true,
            desc: "Crystal structure, defects, and how microstructure sets mechanical behaviour.",
          },
          {
            name: "Properties of Polymer Materials",
            ec: 3,
            done: true,
            desc: "Polymer chains, thermal transitions and viscoelastic response.",
          },
          {
            name: "Quantum Matter and Devices",
            ec: 4,
            done: true,
            desc: "Quantum mechanics applied to semiconductors and solid-state devices.",
          },
          {
            name: "Classical Thermodynamics",
            ec: 4,
            done: true,
            desc: "Energy, entropy, and the laws governing heat and work.",
          },
          {
            name: "Diffraction Lab",
            ec: 1,
            done: true,
            desc: "Diffraction methods for determining crystal structure.",
          },
        ],
      },
      {
        id: "projects",
        title: "Projects",
        blurb: "The build-something-and-defend-it half of the degree.",
        courses: [
          {
            name: "Project Accelerometer",
            ec: 4,
            done: true,
            desc: "The piezoelectric accelerometer build listed under engineering projects above.",
          },
          {
            name: "Project Energy Transition",
            ec: 6,
            done: true,
            desc: "Semester project on sustainable energy systems and their trade-offs.",
          },
          {
            name: "Project SMS",
            ec: 3,
            done: false,
            desc: "Signals, models and systems applied in a design project.",
          },
          {
            name: "Project Antenna",
            ec: 3,
            done: false,
            desc: "Design, simulation and measurement of an antenna.",
          },
          {
            name: "Project Systems and Control",
            ec: 5,
            done: false,
            desc: "Systems and Control module: designing and validating a controlled system.",
          },
          {
            name: "Preparation Bachelor Assignment",
            ec: 3,
            done: false,
            desc: "Scoping and planning the final bachelor project.",
          },
          {
            name: "BSc Assignment",
            ec: 0,
            done: false,
            desc: "The final project, assessed on scientific/design work, communication and process.",
          },
        ],
      },
      {
        id: "context",
        title: "Engineering in context",
        blurb: "The strand on impact, ethics, and turning work into product.",
        courses: [
          {
            name: "Challenges in Science and Engineering 1",
            ec: 2,
            done: true,
            desc: "Engineering in societal context: ethics, impact, professional practice.",
          },
          {
            name: "Challenges in Science & Engineering 2",
            ec: 1,
            done: false,
            desc: "Continuation of the engineering-in-context strand.",
          },
          {
            name: "Entrepreneurship & Innovation Management",
            ec: 6,
            done: false,
            desc: "Taking a technical idea toward a viable product and business.",
          },
        ],
      },
    ],
  },
  hackathons: [
    {
      hackathon: "ETHLisbon 2022",
      hackathonUrl: "https://ethlisbon.org/",
      projectName: "Lekker Finance",
      projectUrl:
        "https://taikai.network/ethlisbon/hackathons/ethlisbon-2022/projects/cl9tpj350446301zcoiepyje5/idea",
      achievement: "Finalist | $10k",
      teamSize: 4,
      role: "Design",
      description: "One-click leveraged futures platform.",
      techStack: ["Euler", "Sommelier Finance", "DeFi", "Leverage"],
    },
    {
      hackathon: "EBC10 Radix",
      hackathonUrl: "https://eblockchainconvention.com/hackathon/",
      projectName: "Radish (later Lattic3)",
      projectUrl: "https://github.com/Lattic3-RDX/lending-dapp",
      achievement: "2nd place | $5k",
      teamSize: 2,
      role: "Frontend",
      description: "Multi-collateralized lending dApp built on Radix.",
      techStack: ["Next.js", "Radix", "Lending"],
    },
    {
      hackathon: "BuildUP #2",
      hackathonUrl:
        "https://medium.com/lukso/buildup-2-hackathon-winners-0f784793bc43",
      projectName: "LUKSO Lending Protocol",
      projectUrl: "https://llp-woad.vercel.app/",
      achievement: "3rd place | 5k€",
      teamSize: 1,
      role: "Full stack",
      description: "Early lending protocol built on LUKSO.",
      techStack: ["Solidity", "LUKSO", "Lending"],
    },
    {
      hackathon: "xStocks Cannes",
      hackathonUrl: "https://xstocks-market-open.devpost.com/",
      projectName: "Paragon",
      projectUrl: "https://devpost.com/software/paragon-h8isc4",
      achievement: "Discretionary prize | $3.3k",
      teamSize: 3,
      role: "Full stack",
      description:
        "First-ever liquidation-free tokenized equity leverage platform on the Ink chain.",
      techStack: ["TypeScript", "React", "Full stack"],
    },
    {
      hackathon: "ETHOxford 2025",
      hackathonUrl: "https://ethoxford.io",
      projectName: "Protein Mango",
      projectUrl: "https://dorahacks.io/buidl/22626",
      achievement: "Flare bounties | $3k",
      teamSize: 3,
      role: "Frontend",
      description:
        "Parametric earthquake insurance with automated claims via ZKPs.",
      techStack: ["Flare", "Mina"],
    },
    {
      hackathon: "ETHGlobal Brussels",
      hackathonUrl: "https://ethglobal.com/events/brussels",
      projectName: "Scrbl",
      projectUrl: "https://ethglobal.com/showcase/scrbl-6d9uh",
      achievement: "Worldcoin pool prize",
      teamSize: 3,
      role: "Solidity",
      description:
        "Under-collateralized lending platform leveraging Worldcoin identity.",
      techStack: ["Pyth", "Chainlink", "World ID"],
    },
    {
      hackathon: "ETHGlobal HackMoney 2026",
      hackathonUrl: "https://ethglobal.com/events/hackmoney2026",
      projectName: "Oshio",
      projectUrl: "https://ethglobal.com/showcase/oshio-99nv7",
      achievement: "Sui bounty | $1k",
      teamSize: 1,
      role: "Frontend",
      description:
        "Margin-trading app on Sui focused on simpler UX, using DeepBook and Pyth to make leveraged trading more accessible.",
      techStack: ["Sui", "DeepBook", "Pyth", "Next.js"],
    },
    {
      hackathon: "Chainlink Convergence",
      hackathonUrl: "https://chain.link/hackathon",
      projectName: "Aletheia",
      projectUrl: "https://aletheia-gilt.vercel.app",
      achievement: "World ID | $500",
      teamSize: 1,
      role: "Full stack",
      description:
        "Prediction markets with AI consensus resolution and market creation (+ Sybil resistance).",
      techStack: ["Tenderly", "Chainlink CRE", "World ID"],
    },
  ],
} as const;
