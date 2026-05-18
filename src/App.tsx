// src/App.tsx
import Hero from './components/Hero';

function App() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-12 py-8 min-h-[100dvh] flex flex-col justify-center items-center text-center">
      <Hero />

      {/* Contact Section */}
      <section className="mt-8 w-full pt-8 border-t border-[rgba(255,255,255,0.07)] flex flex-col items-center">
        <h3 className="text-2xl font-bold text-[#7DD3FC] mb-3">
          Contact
        </h3>
        
        <p className="text-[#CBD5E1] mb-5 leading-relaxed">
          Open to new opportunities — feel free to reach out.
        </p>

        <a 
          href="mailto:harsh.vassaram@gmail.com" 
          className="h-12 px-8 flex items-center justify-center border border-[rgba(255,255,255,0.07)] bg-[#161B22] text-[#F1F5F9] font-medium rounded-md hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-[#7DD3FC] focus:ring-offset-2 focus:ring-offset-[#0D1117] outline-none"
        >
          Say Hello &rarr;
        </a>

        <p className="text-sm text-[#64748B] mt-4">
          harsh.vassaram@gmail.com
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-8 w-full pt-6 text-sm text-[rgba(255,255,255,0.4)] flex justify-center">
        &copy; 2026 Harsh Vassaram
      </footer>
    </main>
  );
}

export default App;
