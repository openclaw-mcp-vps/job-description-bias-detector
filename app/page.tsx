export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Recruiting
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Detect Bias in<br />
          <span className="text-[#58a6ff]">Job Descriptions</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste any job posting and instantly surface gender and age-biased language. Get neutral alternatives and export a cleaned version — so you attract the best candidates, not just some of them.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Detecting Bias — $13/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-3">Example Analysis</p>
          <p className="text-sm text-[#c9d1d9] mb-4">
            <span className="bg-red-900/40 text-red-400 px-1 rounded">rockstar developer</span> needed to{" "}
            <span className="bg-yellow-900/40 text-yellow-400 px-1 rounded">man the support desk</span> and{" "}
            <span className="bg-red-900/40 text-red-400 px-1 rounded">dominate</span> our sales pipeline.
          </p>
          <div className="border-t border-[#30363d] pt-4 space-y-2">
            <p className="text-xs text-[#58a6ff] font-semibold">Suggested Replacements</p>
            <p className="text-xs text-[#8b949e]"><span className="text-red-400">rockstar developer</span> → <span className="text-green-400">skilled developer</span></p>
            <p className="text-xs text-[#8b949e]"><span className="text-yellow-400">man the support desk</span> → <span className="text-green-400">staff the support desk</span></p>
            <p className="text-xs text-[#8b949e]"><span className="text-red-400">dominate</span> → <span className="text-green-400">lead</span></p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "Paste Job Text", desc: "Drop in any job description from any source." },
            { step: "2", title: "Instant Analysis", desc: "NLP patterns flag biased words and phrases in real time." },
            { step: "3", title: "Export Clean Copy", desc: "Download a bias-free version ready to post." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] font-bold text-sm flex items-center justify-center mb-3">{step}</div>
              <p className="text-white font-semibold mb-1">{title}</p>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$13</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited job description scans",
              "Gender & age bias detection",
              "Neutral language suggestions",
              "One-click export of cleaned copy",
              "Bulk upload via CSV",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What kinds of bias does it detect?",
              a: "The tool flags gender-coded language (e.g., 'rockstar', 'ninja', 'man the desk'), age-biased phrases (e.g., 'digital native', 'recent graduate'), and other exclusionary terms using a curated NLP pattern library."
            },
            {
              q: "Do I need technical skills to use it?",
              a: "No. Just paste your job description into the editor and the analysis runs instantly. No setup, no integrations required."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel your subscription at any time from your billing portal. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Job Description Bias Detector. All rights reserved.
      </footer>
    </main>
  );
}
