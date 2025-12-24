import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  help     - Show this help message
  about    - Learn more about me
  skills   - List my technical skills
  contact  - Get my contact information
  projects - View my projects
  clear    - Clear the terminal`,
  about: `Muhammad Abdullah
  7th-semester Data Science student
  Specializing in ML pipelines & intelligent systems
  Status: Available for opportunities`,
  skills: `Technical Skills:
  Languages: Python, SQL, R
  ML/AI: TensorFlow, PyTorch, Scikit-learn
  Tools: Docker, Git, Streamlit
  Cloud: AWS, Azure`,
  contact: `Contact Information:
  Email: muhammad.abdullahds1@gmail.com
  GitHub: github.com/abdulah-x
  LinkedIn: linkedin.com/in/muhammad-abdullah-53b843248`,
  projects: `Featured Projects:
  > Hawk-Ear: Intelligent surveillance system
  > ML Pipeline: End-to-end data processing
  Type 'help' for more commands`,
};

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

    const output = COMMANDS[cmd] || `Command not found: ${cmd}. Type 'help' for available commands.`;
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
