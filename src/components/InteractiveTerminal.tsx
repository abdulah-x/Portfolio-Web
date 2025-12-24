import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  ─────────────────────────────────
  help     - Show this help message
  about    - Learn more about me
  skills   - List my technical skills
  certs    - View my certifications
  contact  - Get my contact information
  projects - View my projects
  clear    - Clear the terminal
  
  Fun commands:
  coffee   - Check my coffee consumption ☕
  quote    - Get an inspiring quote
  easter   - Find a hidden surprise 🥚
  matrix   - Enter the matrix
  sudo     - Try admin access`,
  coffee: `☕ Coffee Status:
  ─────────────────────────────────
  Today:     ████████░░ 4 cups
  This week: ███████████████ 23 cups
  Lifetime:  ∞ (stopped counting)
  
  Current status: CAFFEINATED
  Productivity: MAXIMUM`,
  quote: "RANDOM_QUOTE",
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
  matrix: `Wake up, Neo...
  ─────────────────────────────────
  01001000 01100101 01101100
  01101100 01101111 00100000
  01010111 01101111 01110010
  01101100 01100100
  
  Translation: "Hello World"
  The Matrix has you... 🐇`,
  sudo: `Permission denied.
  ─────────────────────────────────
  Nice try! But this terminal 
  doesn't grant root access.
  
  ⚠️ This incident will be reported.
  (Just kidding... or am I? 👀)`,
  about: `Muhammad Abdullah
  Data Analyst | ML & Generative AI (LLMs) | MLOps | AWS
  7th-semester Data Science student
  Specializing in ML pipelines & intelligent systems
  Status: Available for opportunities`,
  skills: `Technical Skills:
  ─────────────────────────────────
  Languages: Python, SQL, R
  
  Data Analysis & Visualization:
  > Data Cleaning & Wrangling
  > Tableau, Spreadsheets
  > Statistical Analysis
  
  ML/AI Frameworks:
  > TensorFlow, PyTorch, Scikit-learn
  > Pandas, NumPy
  
  Cloud & DevOps:
  > AWS, Azure
  > Docker, Git, Streamlit
  
  API Development:
  > FastAPI, REST APIs
  > WebSocket Integration`,
  certs: `Certifications:
  ─────────────────────────────────
  [Google] Data Analytics Professional
  > Data Analysis, SQL, R, Tableau
  > Data Visualization & Spreadsheets
  
  [WorldQuant University] Applied Data Science Lab
  > API Design, Python, Machine Learning
  > Data Visualization`,
  contact: `Contact Information:
  ─────────────────────────────────
  Email: muhammad.abdullahds1@gmail.com
  GitHub: github.com/abdulah-x
  LinkedIn: linkedin.com/in/muhammad-abdullah`,
  projects: `Featured Projects:
  ─────────────────────────────────
  > FoodHub - Full-stack food delivery platform
  > Crypto Portfolio - FastAPI crypto management
  > NeuraLens - AI traffic sign recognition
  
  Type 'help' for more commands`,
};

const DEV_QUOTES = [
  "It works on my machine. Ship it!",
  "There are only 2 hard problems: cache invalidation, naming things, and off-by-one errors.",
  "99 bugs in the code, take one down, patch it around... 127 bugs in the code.",
  "The best code is no code at all.",
  "First, solve the problem. Then, write the code.",
  "Code is like humor. When you have to explain it, it's bad.",
  "Talk is cheap. Show me the code. - Linus Torvalds",
  "Debugging is like being the detective in a crime movie where you're also the murderer.",
  "A good programmer is someone who always looks both ways before crossing a one-way street.",
];

const getRandomQuote = () => `💡 Random Dev Wisdom:
  ─────────────────────────────────
  "${DEV_QUOTES[Math.floor(Math.random() * DEV_QUOTES.length)]}"`;

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
    
    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let output: string;
    if (cmd === "quote") {
      output = getRandomQuote();
    } else {
      output = COMMANDS[cmd] || `Command not found: ${cmd}. Type 'help' for available commands.`;
    }
    setHistory([...history, { command: input, output }]);
    setInput("");
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
