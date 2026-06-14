export const en = {
  nav: {
    features: "Features",
    architecture: "Architecture",
    usage: "Usage",
    installation: "Installation",
    roadmap: "Roadmap",
    faq: "FAQ"
  },
  hero: {
    version: "v1.0.0 RELEASE",
    title: "OffSploit",
    subtitle1: "Autonomous",
    subtitle2: "Exploit Adaptation",
    subtitle3: "& C2 Framework",
    desc: "A state-of-the-art Red Team tool that uses RAG and Local LLMs to adapt exploits on the fly. Designed for highly secure, air-gapped environments.",
    cloneBtn: "git clone",
    learnBtn: "Learn More",
    termTitle: "offsploit@local:~",
    term1: "offsploit --nmap scan.xml --lhost 10.10.14.5 --rhost 10.10.10.3 --obfuscate",
    term2: "[*] Initializing OffSploit Autonomous Pipeline...",
    term3: "[+] Parsed Nmap output: Found 2 vulnerable services.",
    term4: "[*] Engaging RAG Engine on Exploit-DB (nomic-embed-text)",
    term5: "[+] Retrieved 3 candidates. Passing to Local LLM (qwen2.5-coder).",
    term6: "[*] Ast-based OPSEC check: Passed.",
    term7: "[*] Polymorphic Evasion Engine: Activated (Level: Advanced).",
    term8: "[+] Compilation successful in Sandbox. Ready to deploy!",
    btnDocs: "Read Documentation",
    providersTitle: "Supported AI Engines:",
    providers: ["Ollama (Local)", "Google Gemini", "OpenAI API", "Anthropic Claude"]
  },
  features: {
    title: "Core Architecture & Features",
    subtitle: "Built upon a modular, event-driven pipeline encompassing several cutting-edge offensive security concepts.",
    items: [
      {
        title: "Autonomous Exploit Adaptation (RAG + LLM)",
        desc: "Dynamically reads Nmap/BloodHound outputs, searches Exploit-DB via ChromaDB, and uses local LLMs to rewrite exploits for the exact target environment adjusting payloads and offsets."
      },
      {
        title: "Multi-Agent OPSEC Swarm",
        desc: "An ExploitAgent and OPSECAgent work in a feedback loop. Code is statically analyzed for OPSEC risks (cleartext IPs, noisy processes) before execution. Failsafes trigger autonomous refactoring."
      },
      {
        title: "Self-Healing Docker Sandbox",
        desc: "Exploits are compiled in an isolated sandbox. If compilation errors occur, the stderr is fed back to the LLM for autonomous patching and recompilation until a functional binary is produced."
      },
      {
        title: "Polymorphic Evasion Engine",
        desc: "Bypasses modern AV/EDR through AST Restructuring, Variable Mangling, String Obfuscation, and Indirect Syscalls with API Hashing for Windows targets."
      },
      {
        title: "Attack Path Correlator",
        desc: "Fuses Nmap service data with Active Directory BloodHound graphs to autonomously calculate complex multi-stage attack paths from Initial Access to Domain Admin."
      },
      {
        title: "State Machine Pivoting",
        desc: "Tracks compromised nodes and utilizes a NetworkX-based state machine to recommend the next optimal strategic objective (Lateral Movement vs Privilege Escalation)."
      }
    ]
  },
  usage: {
    title: "Command & Control",
    subtitle: "OffSploit can be driven via its interactive CLI or the real-time Web Dashboard built with Flask and Socket.IO.",
    dashboard: {
      url: "http://localhost:5000",
      targets: "Targets",
      vulns: "Vulnerabilities",
      compiled: "Exploits Compiled",
      log1: "[SYSTEM] Dashboard initialized successfully.",
      log2: "[NMAP] Parsed targets from scan.xml",
      log3: "[RAG] Querying Exploit-DB for MS17-010...",
      log4: "[LLM] Adapting python exploit code...",
      log5: "[OPSEC] No cleartext signatures found."
    },
    cli: {
      interactive: "Interactive Mode",
      interactiveDesc: "Launch the interactive command line interface.",
      standard: "Standard Execution",
      standardDesc: "Run fully autonomous mode against a target.",
      docker: "Docker Deployment",
      dockerDesc: "Run with host networking and mount Exploit-DB."
    }
  },
  install: {
    title: "Seamless Installation",
    subtitle: "Deploy OffSploit in your air-gapped environment in minutes. Designed for secure, isolated environments without reliance on external APIs unless explicitly configured.",
    reqs: "System Requirements",
    reqList: [
      { name: "Python 3.10+", desc: "(Core Framework Engine)", url: "https://www.python.org/downloads/" },
      { name: "Docker Desktop", desc: "(For the Self-Healing Sandbox)", url: "https://www.docker.com/products/docker-desktop/" },
      { name: "Ollama", desc: "(For Local, Air-gapped LLM Inference)", url: "https://ollama.com/download" },
      { name: "Nmap", desc: "(For Target Enumeration)", url: "https://nmap.org/download.html" }
    ],
    steps: [
      { title: "1. Clone the Framework Repository", code: "git clone https://github.com/egnake/OffSploit.git\ncd OffSploit" },
      { title: "2. Install Core Dependencies", code: "pip install -r requirements.txt\npip install -e ." },
      { title: "3. Initialize Local AI Inference", code: "ollama run qwen2.5-coder:14b\nollama run nomic-embed-text" },
      { title: "4. Synchronize Exploit-DB", code: "git clone https://gitlab.com/exploit-database/exploitdb.git" }
    ]
  },
  roadmap: {
    title: "Roadmap & Future Developments",
    subtitle: "The development of OffSploit is ongoing. Planned features for upcoming releases:",
    items: [
      {
        title: "Enhanced Active Directory Analysis",
        desc: "Improving BloodHound graph parsing to identify more complex attack paths, allowing the RAG engine to ingest conceptual AD security literature."
      },
      {
        title: "OffSploit LLM Fine-Tuning",
        desc: "Training and releasing a purpose-built model (offsploit-coder) fine-tuned on offensive security concepts and OPSEC bypassing techniques."
      },
      {
        title: "Multi-Platform Support",
        desc: "Expanding Docker Sandbox compilation mechanisms to autonomously cross-compile exploits for esoteric architectures (MIPS, ARM) alongside standard x86/x64 binaries."
      }
    ]
  },
  footer: {
    desc: "Autonomous Exploit Adaptation & C2 Framework",
    star: "Star on GitHub",
    disclaimerTitle: "Disclaimer & Legal Notice",
    disclaimerText: "OffSploit is developed strictly for authorized penetration testing, Red Team operations, and educational purposes. The use of this tool against systems without explicit, prior consent is illegal and strictly prohibited. The developer (egnake) assume no liability and are not responsible for any misuse or damage caused by this framework.",
    rights: "OffSploit Project. All rights reserved.",
    feedback: "Your feedback is important to me!"
  },
  flow: {
    title: "Autonomous Pipeline",
    subtitle: "Observe the data flow from initial reconnaissance to successful exploitation in our isolated sandbox.",
    nodes: ["Reconnaissance (Nmap)", "RAG Engine (ChromaDB)", "Local LLM Refactoring", "OPSEC Validation", "Sandbox Compilation", "Target Execution"]
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Comprehensive insights into the OffSploit Framework architecture, capabilities, and security.",
    items: [
      { q: "Does OffSploit require an internet connection?", a: "No. OffSploit is purposefully designed for highly secure, air-gapped environments. It utilizes local LLMs via Ollama and a local ChromaDB vector database, ensuring that sensitive target data, infrastructure details, and exploit payloads never leave your internal network." },
      { q: "Which AI Models (LLMs) are supported?", a: "The architecture is modular and highly flexible. For maximum OPSEC in air-gapped networks, we recommend 'qwen2.5-coder' running via local Ollama. However, by simply providing an API key in the configuration, you can seamlessly integrate Google Gemini, OpenAI (GPT-4), or Anthropic Claude models for enhanced reasoning." },
      { q: "How does the Self-Healing Sandbox work?", a: "When adapting complex exploits (like MS17-010 or specific kernel exploits), compilation failures are common. OffSploit's Self-Healing Docker Sandbox catches compilation errors (stderr) and securely feeds the stack trace back to the LLM. The AI autonomously patches the code and recursively attempts recompilation until a functional, executable binary is produced." },
      { q: "Is the framework completely automated?", a: "OffSploit supports both fully Autonomous Mode and Interactive Mode. In Interactive Mode, the framework acts as a Red Team co-pilot, detailing its attack plan and asking for explicit operator approval before compiling payloads or executing commands against the target." },
      { q: "Can it bypass modern AV/EDR solutions?", a: "Yes. OffSploit incorporates a Polymorphic Evasion Engine. Before compilation, it passes the exploit through an AST restructuring phase, mangles variables, obfuscates strings, and implements API Hashing with Indirect Syscalls (specifically for Windows targets) to minimize the static signature footprint." },
      { q: "How does it handle zero-day vulnerabilities?", a: "While OffSploit primarily relies on its local Exploit-DB clone via RAG for known CVEs, you can manually feed proof-of-concept code or security write-ups into the context window. The LLM will process the theoretical concepts and attempt to generate a weaponized exploit based on the provided methodology." },
      { q: "What Operating Systems are supported?", a: "The OffSploit Framework itself runs on Linux and macOS (where Docker and Python are supported). It can generate and adapt exploits for a wide array of target systems, including Windows, Linux, and various web applications, depending on the exploits retrieved from the database." }
    ]
  },
  stats: {
    title: "Community Backed",
    subtitle: "Join the growing community of offensive security researchers.",
    stars: "GitHub Stars",
    forks: "Forks",
    issues: "Open Issues"
  }
};
