"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const pages = [
  {
    eyebrow: "A tiny surprise",
    title: "Today is a very special Day ✨",
    body: "I have surprise for u",
    emoji: "🎁",
    cta: "Plss click next",
  },
  {
    eyebrow: "Okay buddhu…",
    title: "Buddhu 😭",
    body: "Or aage chlo jese aapki jubaan lambi h wese hi ye bhi lamba h babyyyyyyy badtamiz 😂",
    emoji: "🙄",
    cta: "Aage chalo →",
  },
  {
    eyebrow: "And finally…",
    title: "HAPPPYYYY BIRTHDAYYYYY 🎂",
    body: "So Today is very special day for u so wish u very very very happpyyyyyyyyyy birthdayyyyyyyyyyyyyyyyy babyyyyyyyyyyyyyyyyyyyyy..... 🥳✨",
    emoji: "🎉",
    cta: "One last thing →",
  },
  {
    eyebrow: "Okay, listen…",
    title: "One thing I had to say 🫶",
    body: "I really really really loveeeeee ughhhhhhhhhh sooooooooo sooooooo muchhhhhhhhhhhhhhhh everytime 🥹✨",
    emoji: "🌙",
    cta: "Last page →",
  },
];

const kissGif =
  "https://media1.tenor.com/m/-VlI93QJiQMAAAAd/cat-kiss.gif";

export default function Home() {
  const [page, setPage] = useState(0);
  const [started, setStarted] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 61) % 100}%`,
        delay: `${(i % 8) * 0.45}s`,
        duration: `${5 + (i % 5)}s`,
        size: `${2 + (i % 4)}px`,
      })),
    []
  );

  const isFinal = page === pages.length;

  function next() {
    setStarted(true);
    setPage((p) => Math.min(p + 1, pages.length));
  }

  function back() {
    setPage((p) => Math.max(p - 1, 0));
  }

  return (
    <main className="stage">
      <div className="aurora auroraOne" />
      <div className="aurora auroraTwo" />
      <div className="grain" />

      <div className="particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="topbar">
        <div className="brand">
          <span className="brandMark">✦</span>
          <span>for someone special</span>
        </div>
        {started && !isFinal && (
          <div className="counter">
            {page + 1} / {pages.length + 1}
          </div>
        )}
      </div>

      <section className="cardShell">
        <div className="cardGlow" />

        <AnimatePresence mode="wait" initial={false}>
          {!started ? (
            <motion.div
              key="intro"
              className="content intro"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="crest"
                animate={{ y: [0, -7, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                ✦
              </motion.div>
              <p className="eyebrow">A PRIVATE LITTLE MESSAGE</p>
              <h1>There&apos;s something<br />waiting for you.</h1>
              <p className="subtext">
                Nothing too serious. Just a tiny birthday surprise,
                one page at a time. ✨
              </p>
              <button className="royalButton" onClick={next}>
                <span>Open the surprise</span>
                <span className="arrow">→</span>
              </button>
              <p className="hint">best experienced with sound on • optional</p>
            </motion.div>
          ) : !isFinal ? (
            <motion.div
              key={page}
              className="content"
              initial={{ opacity: 0, x: 70, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -70, scale: 0.97 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pageNumber">
                <span>0{page}</span>
                <i />
                <span className="muted">0{pages.length}</span>
              </div>

              <motion.div
                className="bigEmoji"
                animate={{ y: [0, -9, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                {pages[page - 1].emoji}
              </motion.div>

              <p className="eyebrow">{pages[page - 1].eyebrow}</p>
              <h2>{pages[page - 1].title}</h2>
              <p className="message">{pages[page - 1].body}</p>

              <button className="royalButton" onClick={next}>
                <span>{pages[page - 1].cta}</span>
                <span className="arrow">→</span>
              </button>

              {page > 1 && (
                <button className="backButton" onClick={back}>
                  ← go back
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="final"
              className="content final"
              initial={{ opacity: 0, scale: 0.88, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="finalStars"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                ✦　✧　✦
              </motion.div>

              <p className="eyebrow">THE END… OR IS IT? 😌</p>
              <h2>Okay, now smile. 🥹</h2>

              <div className="gifFrame">
                <div className="gifShine" />
                <img
                  src={kissGif}
                  alt="Cute cat kiss GIF"
                  className="kissGif"
                />
              </div>

              <p className="finalText">
                That&apos;s it. No long speech. Just happy birthday,
                babyyyyy. 🫶✨
              </p>

              <button className="smallButton" onClick={() => setPage(1)}>
                replay from the beginning ↺
              </button>

              <p className="credit">
                made with ✦, questionable amounts of effort &amp; good vibes
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {started && (
        <div className="dots" aria-label="Page navigation">
          {Array.from({ length: pages.length + 1 }).map((_, i) => (
            <button
              key={i}
              className={i === page ? "dot active" : "dot"}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="footerNote">KEEP SCROLLING? NAH. JUST CLICK. ✦</div>
    </main>
  );
}
