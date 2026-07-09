import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1W9ClweN7PtJ-HMA7GjJFURAI72DeyvFW/view?usp=sharing";

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  ─────────────────────────────────
  Portfolio:
  about      - Learn more about me
  skills     - List my technical skills
  stack      - My preferred tech stack
  experience - Work experience
  education  - Academic background
  certs      - View my certifications
  projects   - View my projects
  contact    - Get my contact info
  socials    - Social & professional links
  resume     - Open my resume (PDF)
  hire       - Why you should hire me

  System:
  whoami     - Current user
  date       - Current date/time
  ls         - List portfolio sections
  neofetch   - System info
  clear      - Clear the terminal

  Fun:
  coffee     - Coffee consumption ☕
  quote      - Dev wisdom
  joke       - Programmer joke
  fortune    - Your fortune
  ascii      - ASCII art
  hack       - Initiate "hack" sequence
  matrix     - Enter the matrix
  easter     - Hidden surprise 🥚
  sudo       - Try admin access`,

  about: `Muhammad Abdullah
  ─────────────────────────────────
  Role:    Data Analyst | ML & GenAI (LLMs) | MLOps | AWS
  Study:   7th-semester Data Science student
  Focus:   ML pipelines, LLM apps, intelligent systems
  Status:  Available for internships & opportunities
  Motto:   "The magic you are looking for is in
           the work you are avoiding."`,

  skills: `Technical Skills:
  ─────────────────────────────────
  Languages:      Python, SQL, R
  Data & Viz:     Pandas, NumPy, Tableau, Spreadsheets
  ML / AI:        TensorFlow, PyTorch, Scikit-learn
  GenAI / LLMs:   LangChain, RAG, Prompt Engineering
  Cloud:          AWS, Azure
  DevOps:         Docker, Git, GitHub Actions, Streamlit
  APIs:           FastAPI, REST, WebSockets
  Databases:      PostgreSQL, MongoDB`,

  stack: `Preferred Stack:
  ─────────────────────────────────
  Backend:    Python + FastAPI
  ML:         PyTorch / TF / scikit-learn
  LLM:        LangChain + OpenAI / Gemini
  Data:       Pandas, NumPy, SQL
  Storage:    PostgreSQL, S3
  Deploy:     Docker + AWS (ECS / Lambda)
  Frontend:   Streamlit / React (when needed)
  Tooling:    Git, GitHub Actions, VS Code`,

  experience: `Work Experience:
  ─────────────────────────────────
  > Data Science & ML projects (freelance / academic)
  > Building ML pipelines & LLM-powered tools
  > Deploying models with FastAPI + Docker on AWS

  Scroll to the #experience section for full details.`,

  education: `Education:
  ─────────────────────────────────
  > BS Data Science (7th semester)
  > Coursework: ML, Deep Learning, Statistics,
    Data Structures, Databases, Cloud Computing

  Scroll to the #education section for full details.`,

  certs: `Certifications:
  ─────────────────────────────────
  [Google] Data Analytics Professional
    > Data Analysis, SQL, R, Tableau
    > Data Visualization & Spreadsheets

  [WorldQuant University] Applied Data Science Lab
    > API Design, Python, Machine Learning
    > Data Visualization`,

  projects: `Featured Projects:
  ─────────────────────────────────
  > JobRadar    - Job aggregation & tracking
  > Hawk-Ear    - Audio intelligence system
  > FoodHub     - Full-stack food delivery platform
  > VaultX      - Secure crypto portfolio (FastAPI)
  > NeuraLens   - AI traffic-sign recognition

  Scroll to #projects for demos & source code.`,

  contact: `Contact Information:
  ─────────────────────────────────
  Email:    muhammad.abdullahds1@gmail.com
  GitHub:   github.com/abdulah-x
  LinkedIn: linkedin.com/in/muhammad-abdullah

  Tip: type 'resume' to open my CV.`,

  socials: `Find me online:
  ─────────────────────────────────
  GitHub:   https://github.com/abdulah-x
  LinkedIn: https://linkedin.com/in/muhammad-abdullah
  Email:    muhammad.abdullahds1@gmail.com`,

  resume: `RESUME_OPEN`,

  hire: `Why hire me?
  ─────────────────────────────────
  ✔ Ship end-to-end: data → model → API → deploy
  ✔ Comfortable with LLMs, RAG & modern GenAI stack
  ✔ Cloud-native mindset (AWS, Docker, CI/CD)
  ✔ Fast learner, obsessive about clean pipelines
  ✔ Available for internships & collaborations

  → type 'contact' or 'resume' to get in touch.`,

  whoami: `visitor@abdullah-portfolio
  ─────────────────────────────────
  You are a curious explorer with excellent taste.
  Permissions: guest (read-only)
  Recommended: type 'hire' 😉`,

  ls: `total 6
  drwxr-xr-x  #home
  drwxr-xr-x  #experience
  drwxr-xr-x  #projects
  drwxr-xr-x  #skills
  drwxr-xr-x  #education
  drwxr-xr-x  #contact`,

  neofetch: `       _.-''-._        visitor@abdullah-portfolio
      /  .--.  \\       ────────────────────────────
     |  ( () )  |      OS:      PortfolioOS v2.0
      \\  '--'  /       Host:    lovable.dev
       '-.__.-'        Kernel:  React 18 + Vite
                       Shell:   /bin/curiosity
                       Theme:   Cyberpunk Neon
                       CPU:     Caffeine ×∞
                       Uptime:  since 2024`,

  coffee: `☕ Coffee Status:
  ─────────────────────────────────
  Today:     ████████░░ 4 cups
  This week: ███████████████ 23 cups
  Lifetime:  ∞ (stopped counting)

  Current status: CAFFEINATED
  Productivity:   MAXIMUM`,

  quote: "RANDOM_QUOTE",
  joke: "RANDOM_JOKE",
  fortune: "RANDOM_FORTUNE",

  ascii: `      /\\_/\\
     ( o.o )   < hello, world!
      > ^ <
  ─────────────────────────────────
    ▄▀█ █▄▄ █▀▄ █░█ █░░ █░░ ▄▀█ █░█
    █▀█ █▄█ █▄▀ █▄█ █▄▄ █▄▄ █▀█ █▀█`,

  hack: `Initiating "hack" sequence...
  ─────────────────────────────────
  [■■■■■■■■■■] 100%
  > Bypassing firewall............ OK
  > Cracking mainframe............ OK
  > Downloading the internet...... OK
  > Deploying skynet.............. DENIED
  
  Just kidding. I only hack legally. 😎`,

  matrix: `Wake up, Neo...
  ─────────────────────────────────
  01001000 01100101 01101100
  01101100 01101111 00100000
  01010111 01101111 01110010
  01101100 01100100

  Translation: "Hello World"
  The Matrix has you... 🐇`,

  easter: `🥚 You found the Easter Egg!
  ─────────────────────────────────
     ╭──────────────────────╮
     │  CONGRATULATIONS!    │
     │  You're curious.     │
     │  That's a good sign. │
     │  Keep exploring!     │
     ╰──────────────────────╯
         \\ (•◡•) /
          \\     /
           ─────`,

  sudo: `[sudo] password for visitor: ********
  ─────────────────────────────────
  Sorry, visitor is not in the sudoers file.
  This incident will be reported.
  (Just kidding... or am I? 👀)`,
};

const DEV_QUOTES = [
  "It works on my machine. Ship it!",
  "There are only 2 hard problems: cache invalidation, naming things, and off-by-one errors.",
  "99 bugs in the code, take one down, patch it around... 127 bugs in the code.",
  "The best code is no code at all.",
  "First, solve the problem. Then, write the code.",
  "Code is like humor. When you have to explain it, it's bad.",
  "Talk is cheap. Show me the code. — Linus Torvalds",
  "Debugging is like being the detective in a crime movie where you're also the murderer.",
  "A good programmer looks both ways before crossing a one-way street.",
  "In data we trust, all others must bring data. — W. E. Deming",
];

const JOKES = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "There are 10 types of people: those who understand binary and those who don't.",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I JOIN you?'",
  "Why did the developer go broke? Because he used up all his cache.",
  "I would tell you a UDP joke, but you might not get it.",
  "How many programmers does it take to change a lightbulb? None — it's a hardware problem.",
  "Debugging: being the detective, victim, and murderer all at once.",
];

const FORTUNES = [
  "A pull request will be merged in your favor today.",
  "Your next model will actually converge on the first try. Believe.",
  "A recruiter is typing... 👀",
  "The bug you fear the most is a missing semicolon.",
  "Ship it. The docs can wait.",
  "Great data is in your near future.",
  "Beware of stale caches bearing gifts.",
];

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const getRandomQuote = () => `💡 Random Dev Wisdom:
  ─────────────────────────────────
  "${pick(DEV_QUOTES)}"`;

const getRandomJoke = () => `😂 Programmer Joke:
  ─────────────────────────────────
  ${pick(JOKES)}`;

const getRandomFortune = () => `🔮 Your Fortune:
  ─────────────────────────────────
  ${pick(FORTUNES)}`;

const getDate = () => `📅 ${new Date().toString()}`;

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: string }[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let output: string;
    if (cmd === "quote") output = getRandomQuote();
    else if (cmd === "joke") output = getRandomJoke();
    else if (cmd === "fortune") output = getRandomFortune();
    else if (cmd === "date") output = getDate();
    else if (cmd === "resume") {
      window.open(RESUME_URL, "_blank", "noopener,noreferrer");
      output = `Opening resume in a new tab...
  ${RESUME_URL}`;
    } else {
      output =
        COMMANDS[cmd] ||
        `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setHistory([...history, { command: input, output }]);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="fixed bottom-6 right-6 z-40"
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 w-80 md:w-96 bg-card/95 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden neon-border"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border-b border-primary/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-primary ml-2">visitor@abdullah-portfolio</span>
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalRef}
              className="h-64 overflow-y-auto p-4 font-mono text-xs space-y-2"
            >
              <p className="text-muted-foreground">
                Welcome to my interactive terminal!
                <br />
                Type <span className="text-primary">help</span> to see available commands.
              </p>

              {history.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-primary">
                    <span className="text-accent">$</span> {item.command}
                  </p>
                  <p className="text-muted-foreground whitespace-pre-line pl-2">
                    {item.output}
                  </p>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleCommand} className="border-t border-primary/20 p-3 flex items-center gap-2">
              <span className="text-accent font-mono text-xs">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command..."
                className="flex-1 bg-transparent font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
                aria-label="Terminal command input"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center neon-border hover:bg-primary/30 transition-colors"
        aria-label={isExpanded ? "Close terminal" : "Open interactive terminal"}
      >
        <Terminal className="w-6 h-6 text-primary" />
      </motion.button>
    </motion.div>
  );
}
