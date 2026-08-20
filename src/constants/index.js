export const carouselSlides = [
  {
    id: 1,
    type: "profile", 
    title: "COMPANY PROFILE",
    subtitle: "View Official PDF",
    bgImage: "/images/logo-light-1.svg",
    btnText: "VIEW",
    // 🟢 External link hata kar aapke public folder wale PDF ka path laga diya hai
    btnLink: "/pdf/DeltaShoppe-OfficialCompanyProfile.pdf", 
  },
  {
    id: 2,
    type: "ceo", 
    title: "FOUNDER & CEO",
    subtitle: "Message",
    ceoImage: "/images/imran-rashid-ceo.png",
    quote: `"Let me welcome you to Team DeltaShoppe. Our experienced team is solely focused on the outcome without compromising on quality."`,
  },
  {
    id: 3,
    type: "services", 
    title: "OUR SERVICES",
    subtitle: "What we provide",
    bgImage: "/images/blocks.png", 
    btnText: "VIEW",
  },
  {
    id: 4,
    type: "achievements", 
    title: "OUR ACHIEVEMENTS",
    subtitle: "By The Numbers",
    stats: [
      { value: "100M+", label: "REVENUE GENERATED" },
      { value: "1,000+", label: "PROJECTS COMPLETED" },
      { value: "25+", label: "IN-HOUSE DEVELOPERS" },
      { value: "98.8%", label: "CLIENT SATISFACTION" }
    ]
  }
];

// 🟢 Apne Flaticon images ka path yahan replace kar lein
export const servicesList = [
  { name: "Web App Development", icon: "/images/icons/developer.png" }, 
  { name: "Automated Testing", icon: "/images/icons/testing.png" },
  { name: "Mobile App Development", icon: "/images/icons/mobile-application.png" },
  { name: "UI/UX & Graphics Design", icon: "/images/icons/web-design.png" },
  { name: "DevOps", icon: "/images/icons/devops.png" },
  { name: "Internet of Things", icon: "/images/icons/iot.png" },
  { name: "Content & Copywriting", icon: "/images/icons/content-writing.png" },
  { name: "Technical Writing", icon: "/images/icons/writing.png" }
];

export const principles = [
  {
    title: "Development",
    text: "Through latest technologies and an agile environment, our development process ensures your solution meets the quality standards."
  },
  {
    title: "Diligence",
    text: "Through our diligent practices, your objectives are met with perfectly designed solutions that follow all the proper patterns and conventions."
  },
  {
    title: "Dedication",
    text: "Whatever your goals are, our dedicated and experienced team have got it covered. They will pull out all the stops to meet your expectations."
  }
];

export const teamData = [
  {
    img: "/images/p1.png", // Apni team ki image ka path dain
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    translation: "translate-y-[-5%] md:left-[20%]",
  },
  {
    img: "/images/p2.png",
    rotation: "rotate-z-[4deg] md:left-[30%]",
    name: "Alexander",
  },
  {
    img: "/images/p3.png",
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    translation: "translate-y-[-5%] md:left-[40%]",
  },
  {
    img: "/images/p4.png",
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    translation: "translate-y-[5%] md:left-[50%]",
  },
  {
    img: "/images/p5.png",
    rotation: "rotate-z-[-10deg] md:left-[60%]",
    name: "Chris",
  },
  {
    img: "/images/p6.png",
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    translation: "translate-y-[5%] md:left-[70%]",
  },
  {
    img: "/images/p7.png",
    rotation: "rotate-z-[-3deg] md:left-[80%]",
    name: "Melisa",
    translation: "translate-y-[10%]",
  },
];