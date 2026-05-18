// src/components/Hero.tsx

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center w-full">
      <h1 className="text-5xl font-extrabold text-[#F1F5F9] tracking-tight mb-3">
        Harsh Vassaram
      </h1>
      <h2 className="text-2xl font-semibold text-[#7DD3FC] mb-6">
        Software Engineer | React · RAG · LLMs
      </h2>
      <p className="text-lg text-[#CBD5E1] max-w-2xl mb-8 leading-relaxed">
        Frontend-focused Software Engineer specializing in building highly performant UI/UX for AI applications. Experience in translating complex Figma prototypes into production-ready React applications and optimizing backend RAG pipelines for domain-specific systems.
      </p>
      
      {/* Action Links */}
      <div className="flex justify-center items-center gap-4">
        <a 
          href="/Harsh_Vassaram_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="h-[44px] px-6 flex items-center justify-center border border-[rgba(255,255,255,0.07)] bg-[#161B22] text-[#F1F5F9] font-medium rounded-md hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-[#7DD3FC] focus:ring-offset-2 focus:ring-offset-[#0D1117] outline-none"
        >
          Resume (PDF)
        </a>
        <a 
          href="https://github.com/hvmax" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className="h-[44px] w-[44px] flex items-center justify-center border border-[rgba(255,255,255,0.07)] bg-[#161B22] rounded-md hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-[#7DD3FC] focus:ring-offset-2 focus:ring-offset-[#0D1117] outline-none"
        >
          <img src="/github-logo.svg" alt="GitHub Logo" className="w-5 h-5" />
        </a>
        <a 
          href="https://linkedin.com/in/harsh-vassaram" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="h-[44px] w-[44px] flex items-center justify-center border border-[rgba(255,255,255,0.07)] bg-[#161B22] rounded-md hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-[#7DD3FC] focus:ring-offset-2 focus:ring-offset-[#0D1117] outline-none"
        >
          <img src="/linkedin-logo.png" alt="LinkedIn Logo" className="w-5 h-5 object-contain" />
        </a>
      </div>
    </section>
  );
}