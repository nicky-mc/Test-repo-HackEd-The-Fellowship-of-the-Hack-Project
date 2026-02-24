export const TECH_SKILLS = [
  {
    id: "tech_1",
    category: "Online Safety",
    title: "The 'Royal Mail' Text Scam",
    scenario:
      "You receive a text message saying: 'Royal Mail: Your package has a £2.99 unpaid shipping fee. Click here to pay: http://royal-mail-fees-uk.com'.",
    mathProblem: "What is the safest first step?",
    formula: "Never click links in unexpected texts or emails.",
    options: [
      "Click the link to pay the small fee",
      "Reply to the text asking if it's real",
      "Ignore it, or log into the official Royal Mail app to check",
    ],
    correctAnswer: 2,
    realLifeContext:
      "This is called 'Phishing'. Scammers use fake links to steal your bank details. Official organizations like Royal Mail or HMRC will rarely text you asking for immediate payment via a link.",
  },
  {
    id: "tech_2",
    category: "Security",
    title: "Creating a Safe Password",
    scenario:
      "You are setting up an online account for your local council and need a secure password.",
    mathProblem:
      "Which of these is the most secure password according to UK cyber experts?",
    formula: "Use 3 random words + numbers + symbols.",
    options: [
      "Password123!",
      "Rover2015 (Your dog's name and birth year)",
      "PurpleCoffeeWindow99!",
    ],
    correctAnswer: 2,
    realLifeContext:
      "Hackers use programs that can guess millions of standard passwords in seconds. The National Cyber Security Centre (NCSC) recommends stringing together three random words because it makes the password long and incredibly hard for a computer to guess.",
  },
  {
    id: "tech_3",
    category: "Everyday Tech",
    title: "Using Public Wi-Fi",
    scenario:
      "You are sitting in a local cafe using their free public Wi-Fi on your phone.",
    mathProblem:
      "Which of these activities should you AVOID doing on public Wi-Fi?",
    formula: "Public Wi-Fi = Public Information.",
    options: [
      "Checking the BBC News website",
      "Logging into your online banking",
      "Looking up bus times on Google Maps",
    ],
    correctAnswer: 1,
    realLifeContext:
      "Public Wi-Fi networks are often unsecured. This means someone else on the same network could potentially intercept your data. Always use your mobile data (4G/5G) or wait until you get home to do your banking.",
  },
];
