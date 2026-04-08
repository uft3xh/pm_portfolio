import { useState, useEffect, useRef } from "react";

const DEFAULT_DATA = JSON.parse(`{"name":"Sita Suri","titles":["Aspiring PM.","Strategist.","Builder."],"location":"Charlottesville, VA.","lat":"40.7128° N","lng":"74.0060° W","tagline":"Available for new opportunities","bio":"I'm a product-focused problem solver who likes working at the intersection of users, systems, and business decisions. I spend a lot of time figuring out how things actually work in practice, where they break, and how to make them simpler and more effective.\\n\\nAcross my experience in product, engineering, and operations, I've worked on improving real workflows, from redesigning maintenance processes in SaaS tools to mapping compliance and expansion strategy across multiple cities. I'm especially interested in messy, ambiguous problems where the goal isn't just to build something, but to build the right thing.","stats":[{"num":"4","label":"Internships"},{"num":"3+","label":"Industries"},{"num":"3","label":"Major Projects"}],"email":"sita.suri2004@gmail.com","linkedin":"https://www.linkedin.com/in/sita-suri-860a95314/","resumeUrl":"https://docs.google.com/document/d/19iVV3vQlepP6D5owOAJbDxwZ0LwwQTD0hW3GB2SAWmA/edit?tab=t.0","photoUrl":"https://i.imgur.com/NEkEwm4.jpeg","experience":[{"title":"Product Management Intern","company":"OnCall Pro","dept":"","date":"October 2025- February 2026","bullets":["Investigated how property managers actually make maintenance decisions in practice, identifying gaps between system logic and real-world workflows","Redesigned a core maintenance request flow to reduce unnecessary steps and better align with how users prioritize speed vs. accuracy","Worked closely with engineering and operations to translate ambiguous workflow issues into clear product changes and implementation plans","Evaluated tradeoffs between automation and manual control, helping shape decisions around when the system should act vs. when users should intervene"]},{"title":"SWE Intern","company":"Hudl","dept":"High School American Football","date":"May 2025 - August 2025","bullets":["Built and shipped production features used by high school teams, contributing to core workflows around team and game management","Implemented event tracking to better understand how users interact with new features, helping the team evaluate adoption and usage patterns","Worked across the stack to debug issues, improve reliability, and ensure features behaved as expected in real-world use","Worked closely with PMs and engineers to turn product ideas into shipped features, navigating tradeoffs between timelines and implementation complexity"]},{"title":"Business Development Intern","company":"Perfect Beach Day NJ","dept":"Internal Operations","date":"February 2026 - Present","bullets":[""]},{"title":"IT Intern","company":"EJF Real Estate","dept":"IT and Operations","date":"June 2024 - Present","bullets":[""]}],"projects":[{"title":"Proof of Life","desc":"A Flutter + Firebase mobile app designed to help small groups stay connected through lightweight \\"proof of life\\" check-ins. The app encourages consistent, meaningful interaction by prompting users to share daily photos and updates within their groups.\\n\\nBuilt core features including authentication, group creation/joining, and real-time state management across users. Designed interaction constraints, such as limiting message volume after a check-in, to nudge users toward more meaningful communication (e.g., calling instead of continued texting).\\n\\nExploring the use of AI-generated daily prompts to encourage engagement, while balancing automation with user control and experience.","tags":["Flutter","Firebase","Mobile","Full Stack","AI"],"link":"https://github.com/uva-cs4971-s26/capstone-orange-02","cover":"","caseStudy":{"background":{"text":"The idea for Proof of Life came from a gap I noticed in how people stay connected today. Most communication tools are optimized for speed and volume (texting, social media), but not necessarily for consistency or meaning. Even in close friend groups, communication tends to be reactive rather than intentional.\\n\\nFrom a product perspective, this raised a question: how might we design a system that encourages consistent, lightweight check-ins without creating pressure or adding another noisy channel?\\n\\nRather than building another messaging platform, I wanted to explore behavior design, specifically how product constraints and small nudges could shift users toward more meaningful interaction patterns.","images":[]},"overview":{"text":"Proof of Life is a group-based mobile app designed to encourage consistent connection through lightweight daily check-ins. Users post a simple \\"proof of life\\" (photo + optional text) within a small, private group.\\n\\nThe core product idea is not just enabling communication, but shaping it. After a user posts, interaction is intentionally constrained (for example, limiting message volume) to discourage endless low-value conversation and instead nudge users toward higher-quality interaction, like calling or catching up outside the app.\\n\\nThe product is built using Flutter (frontend) and Firebase (backend), with a focus on real-time synchronization and low-friction user flows.","images":[]},"goal":{"text":"The primary goal was to design a product that changes behavior, not just adds functionality.\\n\\nKey product goals included:\\n\\nIncrease consistency of communication within small groups Reduce reliance on reactive, low-effort messaging Encourage higher-quality interaction (off-platform when possible) Use constraints as a design tool rather than just features Maintain low friction to support daily usage\\n\\nFrom a product management perspective, this project also focused on practicing:\\n\\nTranslating an ambiguous problem (people drifting apart) into a clear product direction Making tradeoffs between engagement, usability, and behavioral outcomes Defining a simple but opinionated MVP\\n","images":[]},"research":{"text":"Research was primarily exploratory and behavior-driven. I focused on understanding how people actually communicate in small groups and where existing tools fall short.\\n\\nKey observations:\\n\\nUsers intend to stay in touch but lack structure or triggers Group chats often become inactive unless something prompts engagement High message volume does not necessarily correlate with meaningful connection Daily-use apps succeed when the interaction is quick, simple, and habitual\\n\\nI also looked at products like BeReal, which successfully drive daily engagement through prompts and time-based constraints. One key takeaway was that friction must be extremely low, but structure still matters.\\n\\nThis informed an early product hypothesis:\\n\\nConsistent, low-effort check-ins combined with intentional constraints can lead to more meaningful interaction over time.","images":[]},"solutionSpace":{"text":"I explored several directions and evaluated them based on how well they aligned with the core behavior change goal:\\n\\nOpen messaging platform High flexibility, but reinforces existing shallow communication patterns Strict daily posting requirement Strong behavioral enforcement, but risks user drop-off due to pressure Passive presence indicators (status-based) Very low friction, but weak engagement and little interaction\\n\\nFinal direction:\\n\\nLightweight daily check-ins (photo-first interaction) Optional prompts to reduce decision fatigue Post-interaction constraints (e.g., limiting messages after posting) Small group structure to increase accountability and relevance\\n\\nKey tradeoff: I intentionally limited user freedom (messaging constraints) to influence behavior, accepting that this could reduce short-term engagement in favor of higher-quality interaction.","images":[]},"finalProduct":{"text":"The current MVP includes:\\n\\nGoogle authentication Group creation and joining flows Shared group feed with daily check-ins Real-time updates using Firebase Basic navigation across Home, Groups, and Profile Early implementation of interaction constraints\\n\\nIn progress:\\n\\nPush notifications (to reinforce daily habit formation) AI-generated prompts (to reduce friction and improve consistency) Iteration on constraint design (finding the right balance between restriction and usability)\\n\\nFrom a PM perspective, the biggest takeaway has been how much small design decisions impact user behavior. This project pushed me to think beyond \\"what features should we build\\" and focus more on \\"what behaviors are we trying to drive, and how does the product enable that.\\"","images":["https://i.imgur.com/EdVQ2K2.png","https://i.imgur.com/jT7tksZ.png","https://i.imgur.com/GdpPkiB.png"]}}},{"title":"UVA Marketplace","desc":"Built a student-only marketplace for UVA as part of a team-based software engineering project, focused on improving trust and usability compared to platforms like Facebook Marketplace.\\n\\nContributed to designing core user flows around listing items, browsing, and communication, with an emphasis on making interactions more structured and reliable within a closed community.\\n\\nWorked in an agile team using GitHub for version control and collaboration, navigating challenges around integrating features, maintaining consistency across the app, and balancing speed with code quality.","tags":["Django","Full Stack","Marketplace","Agile"],"link":"https://github.com/uva-cs3240-f25/project-b-10","cover":"","caseStudy":{"background":{"text":"","images":[]},"overview":{"text":"","images":[]},"goal":{"text":"","images":[]},"research":{"text":"","images":[]},"solutionSpace":{"text":"","images":[]},"finalProduct":{"text":"","images":[]}}}],"skills":[{"name":"Product Strategy","pct":95},{"name":"User Research","pct":90},{"name":"Data Analysis","pct":85},{"name":"Roadmapping","pct":92},{"name":"Stakeholder Mgmt","pct":88},{"name":"Go-to-Market","pct":80}],"education":[{"degree":"B.S. Computer Science","school":"University of Virginia - School of Engineering and Applied Sciences","year":"Class of 2026 ","icon":"🎓"},{"degree":"Minor General Business","school":"McIntire School of Commerce","year":"Class of 2026","icon":"🎓"}],"volunteering":[{"org":"Charlottesville Tree Stewards","role":"Volunteer","desc":"Volunteered with Charlottesville Tree Stewards to support urban tree planting efforts across local parks. Helped plant and maintain trees using sustainable practices, including proper placement, soil preparation, and long-term care techniques.\\n\\nAlso worked with other volunteers by demonstrating planting methods, answering questions, and helping ensure trees were planted in ways that support long-term growth and environmental impact."},{"org":"Hudl","role":"Curriculum Planning and Student Lead Volunteer","desc":"Participated in curriculum planning and delivery for a summer learning program at Holmes Elementary, helping introduce K–5 students to foundational programming concepts like algorithms and loops. Contributed to designing interactive activities that made abstract concepts more tangible, including a game-based exercise where students applied logic and strategy in real time.\\n\\nSupported in-class facilitation by working directly with students, answering questions, and keeping engagement high, while also assisting with a live demonstration of Hudl's Focus camera to connect classroom learning to real-world technology."},{"org":"Charlottesville SPCA","role":"Volunteer","desc":"Volunteered with the local SPCA to support daily animal care by walking dogs and spending time socializing with cats. Helped improve animals' comfort and behavior through regular interaction, exercise, and attention, contributing to a better environment for both animals and potential adopters."}],"techStack":["Notion","Jira","Figma","Python","SQL"],"aboutLong":"Hi! I'm Sita, a Computer Science student at UVA with a strong interest in product management.\\n\\nI'm originally from the Outer Banks, and I've spent the last 10+ years in Charlottesville. Being close to the Blue Ridge Mountains has made hiking one of my favorite ways to reset.\\n\\nI started my college experience at Piedmont Virginia Community College, where I explored computer science and built a strong foundation in analytical problem solving. After transferring to UVA Engineering, I became especially interested in how technical systems translate into real user value.\\n\\nThat interest really solidified during my software engineering internship, where I worked closely with engineers, designers, and a product manager. Seeing how product decisions were made, not just how features were built, shifted my focus toward product management.\\n\\nSince then, I've been actively building PM experience through internships, coursework, and personal projects, focusing on understanding user behavior, improving workflows, and turning ambiguous problems into structured solutions.","values":[{"icon":"🎯","title":"Clarity over complexity","desc":"The best PMs distill chaos into one clear direction everyone can rally around."},{"icon":"🤝","title":"Deep empathy","desc":"I do user interviews weekly — not quarterly. Real insight lives in the messy details."},{"icon":"⚡","title":"Bias to action","desc":"A good decision shipped beats a perfect decision delayed. Always."},{"icon":"📐","title":"Systems thinking","desc":"Every feature is part of something bigger. I never optimize in isolation."}],"interests":[{"emoji":"🧗","label":"Rock Climbing"},{"emoji":"📚","label":"Reading"},{"emoji":"✈️","label":"Traveling"},{"emoji":"🏓","label":"Pickleball"},{"emoji":"👩🏽‍🍳","label":"Cooking"},{"emoji":"🥾","label":"Hiking"},{"emoji":"🗣️","label":"Spanish"},{"emoji":"🧘🏽","label":"Yoga"}],"collagePhotos":[],"heroPhotos":[],"aboutPhotoUrl":"https://i.imgur.com/tUpe06x.jpeg","contentTitle":"Reads & Listens","content":[{"type":"Podcast","showName":"Lenny's Podcast: Product | Career | Growth","episodeName":"Gibson Biddle on his DHM framework","author":"Lenny Rachitsky ","link":"https://open.spotify.com/episode/6WALK2cHpQaQG06SedMcNQ","cover":"","takeaways":"Gibson Biddle, former VP of Product at Netflix and CPO of Chegg, breaks product thinking down in a way that feels both simple and practical, and a few ideas really stuck with me. One of the biggest was his emphasis on using a simple framework instead of overcomplicating decisions: **does it delight customers, is it hard to copy, and does it have strong margins?** I like this because it keeps you grounded. It's easy to get caught up chasing big or exciting ideas, but these questions force you to focus on what actually makes something valuable.\\n\\nAnother idea that resonated with me was his perspective on starting with a point of view, even if it's wrong. He talks about making what he calls **\\"stupid, wild-ass guesses,\\"** which at first sounds counterintuitive, especially when you're new and feel like you should wait until you're more confident. Instead, his approach is to spend a couple of weeks forming your best thinking, share it early, and then refine it through feedback. It shifts the goal from being right to learning faster, which feels much more realistic and productive.\\n\\n**Finally, I liked how he framed careers as something you build the same way you build products.** You form hypotheses, test them, and iterate. Some things work, and some don't. That perspective made me rethink how I approach opportunities. Instead of trying to make perfect decisions upfront, it becomes more about running thoughtful experiments and improving over time.\\n\\n\\n","category":"PM & Strategy"},{"type":"Book","showName":"Homegoing","episodeName":"","author":"Yaa Gyasi","link":"https://www.goodreads.com/book/show/49985946-homegoing","cover":"https://i.imgur.com/0Si0KWf.jpeg","takeaways":"","category":"Fiction"},{"type":"Book","showName":"The Henna Artist","episodeName":"","author":"Alka Joshi","link":"https://www.goodreads.com/book/show/50607466-the-henna-artist","cover":"https://i.imgur.com/vp60fqd.jpeg","takeaways":"","category":"Fiction"},{"type":"Book","showName":"The Secret Keeper of Jaipur","episodeName":"","author":"Alka Joshi","link":"https://www.goodreads.com/book/show/55004546-the-secret-keeper-of-jaipur","cover":"https://i.imgur.com/JHn7BEF.jpeg","takeaways":"","category":"Fiction"},{"type":"Book","showName":"The Perfumist of Paris","episodeName":"","author":"Alka Joshi","link":"https://www.goodreads.com/book/show/61062499-the-perfumist-of-paris","cover":"https://i.imgur.com/55SjSGU.jpeg","takeaways":"","category":"Fiction"},{"type":"Book","showName":"in progress","episodeName":"Braiding Sweetgrass","author":"Robin Wall Kimmerer","link":"https://www.goodreads.com/book/show/17465709-braiding-sweetgrass","cover":"https://i.imgur.com/28Ar61B.jpeg","takeaways":"","category":""},{"type":"Podcast","showName":"Lenny's Podcast: Product | Career | Growth","episodeName":"Julie Zhuo on accelerating your career & imposter syndrome","author":"Lenny Rachitsky ","link":"https://open.spotify.com/episode/6vnhpYyGY5hCgVqfzU3A7B","cover":"","takeaways":"One episode of Lenny's Podcast that stuck with me was the one with Julie Zhuo, former VP of Product Design at Facebook and author of The Making of a Manager. **What I liked most was how honest she was about imposter syndrome **and not always feeling fully confident in her role, even as she advanced in her career. It made her experience feel a lot more real, especially compared to the idea that people at that level always know exactly what they're doing.\\n\\nOne idea that stood out to me was how she approached communication as a skill you can actively build. **Instead of treating confidence as something you either have or don't, she talked about developing it over time by practicing how you articulate your thoughts and putting yourself in situations where you have to share them more openly.** Writing was one way she did this, which helped her clarify her thinking and express her ideas more clearly.\\n\\nThat idea stuck with me because it reframes confidence as something you develop through practice, not something you're born with. It also connects to a broader pattern I've been noticing, which is that a lot of growth comes from putting yourself in slightly uncomfortable situations, getting feedback, and improving from there. **It's less about waiting until you feel ready, and more about creating opportunities to get better.**","category":"PM & Strategy"}],"workPhotoUrl":"https://i.imgur.com/UcnKyEe.png","aboutPhotoCaption":"Dubrovnik, Croatia","workPhotoCaption":"WMCCAI Conference & Expo in Washington, D.C."}`);

const SK = "pm_v5_data";
const PK = "pm_v5_pass";
const HPK = "pm_v5_haspass";

// Fonts: match the inspo — "Cabinet Grotesk" or "Satoshi" for body, big bold serif for name
const FONT_LINK = "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap";
const F_SERIF = "'Libre Baskerville', Georgia, serif";
const F_SANS = "'Inter', -apple-system, sans-serif";
const PURPLE = "#4c1d95";
const PURPLE_MID = "#7c3aed";
const PURPLE_LIGHT = "#ede9fe";

// ── Fading collage photo (cycles through all photos, each slot offset) ────────
function FadingPhoto({ photos, slotIndex, style }) {
  const [cur, setCur] = useState(slotIndex % Math.max(photos.length, 1));
  const [prev, setPrev] = useState(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (photos.length < 2) return;
    const interval = setInterval(() => {
      setPrev(cur);
      setFading(true);
      const next = (cur + 1) % photos.length;
      setCur(next);
      setTimeout(() => { setPrev(null); setFading(false); }, 800);
    }, 3500 + slotIndex * 900);
    return () => clearInterval(interval);
  }, [cur, photos.length, slotIndex]);

  if (!photos.length) return null;
  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: 16, ...style }}>
      {prev !== null && (
        <img src={photos[prev]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: fading ? 0 : 1, transition: "opacity 0.8s ease" }} />
      )}
      <img src={photos[cur]} alt="" style={{ position: "relative", width: "100%", height: "100%", objectFit: "cover", opacity: 1, display: "block" }} />
    </div>
  );
}

// ── Animated cycling title ────────────────────────────────────────────────────
function AnimatedTitle({ titles }) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!titles || titles.length < 2) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIdx(i => (i + 1) % titles.length); setVisible(true); }, 350);
    }, 2600);
    return () => clearInterval(id);
  }, [titles]);
  return (
    <span style={{ display: "inline-block", transition: "opacity 0.35s ease, transform 0.35s ease", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-10px)" }}>
      {titles?.[idx] || "Product Manager."}
    </span>
  );
}

// ── Counting coordinates ──────────────────────────────────────────────────────
function CountingCoord({ target, suffix }) {
  const [val, setVal] = useState("0.0000");
  const num = parseFloat(target) || 0;
  useEffect(() => {
    const dur = 1600; const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal((num * e).toFixed(4));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [num]);
  return <span style={{ display: "inline-block", minWidth: "7ch", fontVariantNumeric: "tabular-nums" }}>{val}° {suffix}</span>;
}

// ── Screen fade transition ────────────────────────────────────────────────────
function Screen({ active, children }) {
  const [rendered, setRendered] = useState(active);
  const [vis, setVis] = useState(active);
  useEffect(() => {
    if (active) { setRendered(true); requestAnimationFrame(() => requestAnimationFrame(() => setVis(true))); }
    else { setVis(false); const t = setTimeout(() => setRendered(false), 360); return () => clearTimeout(t); }
  }, [active]);
  if (!rendered) return null;
  return (
    <div style={{ position: "absolute", inset: 0, overflowY: "auto", scrollbarWidth: "none", transition: "opacity 0.36s ease, transform 0.36s ease", opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(12px)" }}>
      {children}
    </div>
  );
}

// ── Shared form styles ────────────────────────────────────────────────────────
const iSt = { width: "100%", background: "#fff", border: "1.5px solid #e5e0d8", borderRadius: 10, color: "#111", fontSize: 14, padding: "10px 13px", fontFamily: F_SANS, outline: "none", boxSizing: "border-box" };
const taSt = { ...iSt, minHeight: 88, resize: "vertical" };

const EF = ({ label, value, onChange, multi, ph, note }) => (
  <div style={{ marginBottom: 14 }}>
    {label && <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 5 }}>{label}{note && <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, color: "#bbb", marginLeft: 6 }}>{note}</span>}</div>}
    {multi ? <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={ph || label} style={taSt} /> : <input value={value} onChange={e => onChange(e.target.value)} placeholder={ph || label} style={iSt} />}
  </div>
);

const AddBtn = ({ onClick, label }) => (
  <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 6, background: "transparent", border: "1.5px dashed #ccc", borderRadius: 100, color: "#999", fontSize: 13, padding: "8px 20px", cursor: "pointer", width: "100%", justifyContent: "center", marginTop: 8, fontFamily: F_SANS }}>+ {label}</button>
);
const RemBtn = ({ onClick }) => (
  <button onClick={onClick} style={{ background: "transparent", border: "1px solid #f0c0c0", borderRadius: 100, color: "#c05050", fontSize: 12, padding: "4px 14px", cursor: "pointer", fontFamily: F_SANS }}>Remove</button>
);
const SLabel = ({ text }) => (
  <div style={{ margin: "56px 0 24px", paddingLeft: 16, borderLeft: `4px solid ${PURPLE}` }}>
    <span style={{ fontFamily: F_SERIF, fontSize: 28, fontWeight: 700, color: "#111", letterSpacing: "-0.01em" }}>{text}</span>
  </div>
);
const EditBox = ({ title, children }) => (
  <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 14, padding: 18, marginBottom: 24 }}>
    {title && <div style={{ fontSize: 10, color: "#aaa", fontWeight: 600, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>✏ {title}</div>}
    {children}
  </div>
);
const Pill = ({ href, children }) => (
  <a href={href || "#"} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
    style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 26px", borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: "none", border: "none", background: PURPLE_LIGHT, color: PURPLE, fontFamily: F_SANS, whiteSpace: "nowrap" }}>
    {children}
  </a>
);

// ── Titles editor: one per line ───────────────────────────────────────────────
function TitlesEditor({ titles, onChange }) {
  const [raw, setRaw] = useState((titles || []).join("\n"));
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 5 }}>
        Rotating Titles <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, color: "#bbb" }}>— one per line</span>
      </div>
      <textarea value={raw} onChange={e => { setRaw(e.target.value); onChange(e.target.value.split("\n").map(t => t.trim()).filter(Boolean)); }}
        placeholder={"Product Manager.\nStrategist.\nBuilder."} style={{ ...taSt, minHeight: 100, fontFamily: F_SANS }} />
    </div>
  );
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function HomeScreen({ data, editMode, save }) {
  const latNum = data.lat?.replace(/[^0-9.]/g, "") || "40.7128";
  const lngNum = data.lng?.replace(/[^0-9.]/g, "") || "74.0060";
  const latSuf = (data.lat || "").includes("S") ? "S" : "N";
  const lngSuf = (data.lng || "").includes("W") ? "W" : "E";
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t); }, []);

  const heroPhotos = data.heroPhotos || [];

  const fadeStyle = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "120px 40px 160px", textAlign: "center" }}>
      <div style={{ ...fadeStyle(0), marginBottom:40, display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
        <span style={{ width:6, height:6, borderRadius:"50%", background:PURPLE_MID, display:"inline-block" }}></span>
        <span style={{ fontSize:11, fontWeight:600, letterSpacing:"0.16em", textTransform:"uppercase", color:"#aaa", fontFamily:F_SANS }}>Available for Product (PM/APM) roles</span>
      </div>
      {editMode && (
        <EditBox title="Home">
          <EF label="Name" value={data.name} onChange={v => save({ ...data, name: v })} />
          <TitlesEditor titles={data.titles} onChange={v => save({ ...data, titles: v })} />
          <EF label="Location" value={data.location} onChange={v => save({ ...data, location: v })} />
          <EF label="Tagline" value={data.tagline} onChange={v => save({ ...data, tagline: v })} />
          <EF label="Bio" value={data.bio} onChange={v => save({ ...data, bio: v })} multi />
          <EF label="Profile photo URL" value={data.photoUrl || ""} onChange={v => save({ ...data, photoUrl: v })} ph="https://..." note="— circular avatar above name" />
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: F_SANS }}>Flanking photos (beside name)</div>
            {heroPhotos.map((url, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                <input value={url} onChange={e => { const n = [...heroPhotos]; n[i] = e.target.value; save({ ...data, heroPhotos: n }); }} placeholder="https://..." style={{ ...iSt, flex: 1 }} />
                <button onClick={() => save({ ...data, heroPhotos: heroPhotos.filter((_, x) => x !== i) })} style={{ background: "none", border: "none", color: "#c05050", cursor: "pointer", fontSize: 15 }}>✕</button>
              </div>
            ))}
            {heroPhotos.length < 6 && (
              <button onClick={() => save({ ...data, heroPhotos: [...heroPhotos, ""] })} style={{ background: "none", border: "1px dashed #ccc", borderRadius: 8, padding: "6px 14px", fontSize: 13, color: "#888", cursor: "pointer", fontFamily: F_SANS }}>+ Add photo</button>
            )}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 8 }}>
            {data.stats.map((s, i) => (
              <div key={i} style={{ display: "grid", gap: 6 }}>
                <EF label={`Stat ${i + 1} value`} value={s.num} onChange={v => { const n = [...data.stats]; n[i] = { ...s, num: v }; save({ ...data, stats: n }); }} />
                <EF label="label" value={s.label} onChange={v => { const n = [...data.stats]; n[i] = { ...s, label: v }; save({ ...data, stats: n }); }} />
              </div>
            ))}
          </div>
          <EF label="Email" value={data.email} onChange={v => save({ ...data, email: v })} ph="you@example.com" />
          <EF label="LinkedIn URL" value={data.linkedin} onChange={v => save({ ...data, linkedin: v })} ph="https://linkedin.com/in/..." />
          <EF label="Resume URL" value={data.resumeUrl} onChange={v => save({ ...data, resumeUrl: v })} ph="https://..." />
        </EditBox>
      )}

      {/* HERO: photo + text side by side, centered */}
      <div style={{ ...fadeStyle(0), display: "inline-flex", gap: 40, alignItems: "center", textAlign: "left", marginBottom: 64, width: "100%", justifyContent: "center" }}>
        {data.photoUrl && (
          <div style={{ width: 220, height: 220, borderRadius: "50%", overflow: "hidden", flexShrink: 0, background: "#f0ede8" }}>
            <img src={data.photoUrl} alt={data.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        )}
        <div>
          <h1 style={{ fontFamily: F_SERIF, fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#111", marginBottom: 8 }}>
            {data.name}
          </h1>
          <div style={{ fontFamily: F_SERIF, fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 400, fontStyle: "italic", color: PURPLE_MID, lineHeight: 1.4, marginBottom: 10 }}>
            <AnimatedTitle titles={data.titles} />
          </div>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#ccc", fontFamily: F_SANS, marginBottom: 18 }}>
            {data.location} · <CountingCoord key={latNum} target={latNum} suffix={latSuf} />, <CountingCoord key={lngNum} target={lngNum} suffix={lngSuf} />
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {data.email && <Pill href={`mailto:${data.email}`}>✉ Email</Pill>}
            {data.linkedin && <Pill href={data.linkedin}>LinkedIn</Pill>}
            {data.resumeUrl && <Pill href={data.resumeUrl}>Resume</Pill>}
            {!data.email && !data.linkedin && !data.resumeUrl && !editMode && <span style={{ fontSize: 14, color: "#bbb", fontStyle: "italic", fontFamily: F_SANS }}>Add contact links in edit mode</span>}
          </div>
        </div>
      </div>

      {/* BIO */}
      <div style={{ ...fadeStyle(0.5), marginBottom: 72 }}>
        {data.bio.split("\n\n").map((p, i) => (
          <p key={i} style={{ fontSize: 17, lineHeight: 1.9, color: "#555", marginBottom: 20, fontFamily: F_SANS, fontWeight: 300 }}>{p}</p>
        ))}
      </div>

      {/* STATS */}
      <div style={{ ...fadeStyle(0.6), display: "flex", justifyContent: "center", gap: 56 }}>
        {data.stats.map((s, i) => (
          <div key={i}>
            <div style={{ fontFamily: F_SERIF, fontSize: 40, fontWeight: 700, color: "#111", marginBottom: 4 }}>{s.num}</div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bbb", fontFamily: F_SANS }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CASE STUDY ────────────────────────────────────────────────────────────────
const CS_SECTIONS = [
  { key: "background",    label: "Background" },
  { key: "overview",      label: "Overview" },
  { key: "goal",          label: "Goal" },
  { key: "research",      label: "Research" },
  { key: "solutionSpace", label: "Solution Space" },
  { key: "finalProduct",  label: "Final Product" },
];

function CaseStudyView({ proj, onBack, editMode, onSave }) {
  const cs = proj.caseStudy || {};
  const tagC = [
    { bg:"#f0ede8", color:"#5a4020" },
    { bg:"#eaf2ec", color:"#1e5c30" },
    { bg:"#eeeaf4", color:"#3d2070" },
  ];

  const updateSection = (key, field, value) => {
    const updated = { ...cs, [key]: { ...cs[key], [field]: value } };
    onSave(updated);
  };

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "60px 48px 160px" }}>
      {/* Back */}
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: PURPLE_MID, fontSize: 14, fontFamily: F_SANS, fontWeight: 600, marginBottom: 48, padding: 0 }}>
        ← Back to Work
      </button>

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          {(proj.tags || []).map((t, i) => (
            <span key={i} style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, background: tagC[i % tagC.length].bg, color: tagC[i % tagC.length].color, fontFamily: F_SANS }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontFamily: F_SERIF, fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#111", lineHeight: 1.15, marginBottom: 16 }}>{proj.title}</h1>
        <p style={{ fontSize: 17, color: "#666", lineHeight: 1.8, fontFamily: F_SANS, fontWeight: 300 }}>{proj.desc}</p>
      </div>

      {/* Sections */}
      {CS_SECTIONS.map(({ key, label }) => {
        const section = cs[key] || { text: "", images: [] };
        const hasContent = section.text || (section.images || []).length > 0;
        if (!editMode && !hasContent) return null;
        return (
          <div key={key} style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
              <h2 style={{ fontFamily: F_SERIF, fontSize: 28, fontWeight: 700, color: "#111" }}>{label}</h2>
              <div style={{ flex: 1, height: 1, background: PURPLE_LIGHT }} />
            </div>

            {editMode ? (
              <div>
                <textarea
                  value={section.text}
                  onChange={e => updateSection(key, "text", e.target.value)}
                  placeholder={`Write your ${label.toLowerCase()} here...`}
                  style={{ ...taSt, minHeight: 120, marginBottom: 14 }}
                />
                <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: F_SANS, marginBottom: 8 }}>Images / GIFs</div>
                {(section.images || []).map((url, ii) => (
                  <div key={ii} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                    <input value={url} onChange={e => { const imgs = [...(section.images || [])]; imgs[ii] = e.target.value; updateSection(key, "images", imgs); }} placeholder="/photo.jpg or https://..." style={{ ...iSt, flex: 1 }} />
                    <button onClick={() => { const imgs = (section.images || []).filter((_, x) => x !== ii); updateSection(key, "images", imgs); }} style={{ background: "none", border: "none", color: "#c05050", cursor: "pointer", fontSize: 15 }}>✕</button>
                  </div>
                ))}
                <button onClick={() => updateSection(key, "images", [...(section.images || []), ""])} style={{ background: "none", border: "1px dashed #ccc", borderRadius: 8, padding: "6px 14px", fontSize: 13, color: "#888", cursor: "pointer", fontFamily: F_SANS }}>+ Add image / GIF</button>
              </div>
            ) : (
              <div>
                {section.text && section.text.split("\n\n").map((p, pi) => (
                  <p key={pi} style={{ fontSize: 16, lineHeight: 1.85, color: "#444", marginBottom: 16, fontFamily: F_SANS, fontWeight: 300 }}>{p}</p>
                ))}
                {(() => { const imgs = (section.images || []).filter(Boolean); return imgs.length > 0 && (
                  <div style={{ display: "grid", gridTemplateColumns: imgs.length === 1 ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginTop: 24 }}>
                    {imgs.map((url, ii) => (
                      <img key={ii} src={url} alt="" style={{ width: imgs.length === 1 ? "60%" : "100%", margin: imgs.length === 1 ? "0 auto" : 0, borderRadius: 14, display: "block", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", objectFit: "cover" }} />
                    ))}
                  </div>
                ); })()}
              </div>
            )}
          </div>
        );
      })}

      {!editMode && CS_SECTIONS.every(({ key }) => !(cs[key]?.text) && !(cs[key]?.images?.length)) && (
        <p style={{ fontSize: 15, color: "#bbb", fontStyle: "italic", fontFamily: F_SANS, textAlign: "center", marginTop: 40 }}>No case study content yet. Enter edit mode to add details.</p>
      )}
    </div>
  );
}

// ── WORK ──────────────────────────────────────────────────────────────────────
function WorkScreen({ data, editMode, save }) {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const ue = (i,f,v) => { const e=[...data.experience];e[i]={...e[i],[f]:v};save({...data,experience:e}); };
  const ub = (i,bi,v) => { const e=[...data.experience];const b=[...e[i].bullets];b[bi]=v;e[i]={...e[i],bullets:b};save({...data,experience:e}); };
  const ab = (i) => { const e=[...data.experience];e[i]={...e[i],bullets:[...e[i].bullets,""]};save({...data,experience:e}); };
  const rb = (i,bi) => { const e=[...data.experience];e[i]={...e[i],bullets:e[i].bullets.filter((_,x)=>x!==bi)};save({...data,experience:e}); };
  const ae = () => save({...data,experience:[...data.experience,{title:"New Role",company:"Company",dept:"",date:"20XX–Now",bullets:[""]}]});
  const re = (i) => save({...data,experience:data.experience.filter((_,x)=>x!==i)});
  const up = (i,f,v) => { const p=[...data.projects];p[i]={...p[i],[f]:v};save({...data,projects:p}); };
  const ap = () => save({...data,projects:[...data.projects,{title:"New Project",desc:"",tags:[],link:""}]});
  const rp = (i) => save({...data,projects:data.projects.filter((_,x)=>x!==i)});
  const ut = (i,v) => { const p=[...data.projects];p[i]={...p[i],tags:v.split(",").map(t=>t.trim()).filter(Boolean)};save({...data,projects:p}); };
  const us = (i,f,v) => { const s=[...data.skills];s[i]={...s[i],[f]:v};save({...data,skills:s}); };
  const as2 = () => save({...data,skills:[...data.skills,{name:"New Skill",pct:75}]});
  const rs = (i) => save({...data,skills:data.skills.filter((_,x)=>x!==i)});
  const ued = (i,f,v) => { const e=[...data.education];e[i]={...e[i],[f]:v};save({...data,education:e}); };
  const aed = () => save({...data,education:[...data.education,{degree:"Degree",school:"School",year:"Year",icon:"🎓"}]});
  const red = (i) => save({...data,education:data.education.filter((_,x)=>x!==i)});
  const uv = (i,f,v) => { const vv=[...data.volunteering];vv[i]={...vv[i],[f]:v};save({...data,volunteering:vv}); };
  const av = () => save({...data,volunteering:[...data.volunteering,{org:"Organization",role:"Role",desc:""}]});
  const rv = (i) => save({...data,volunteering:data.volunteering.filter((_,x)=>x!==i)});

  const tagC = [
    { bg:"#f0ede8", color:"#5a4020", border:"#ddd4c0" },
    { bg:"#eaf2ec", color:"#1e5c30", border:"#b8d8c0" },
    { bg:"#eeeaf4", color:"#3d2070", border:"#ccc0e0" },
  ];

  if (selectedIdx !== null) {
    const proj = data.projects[selectedIdx];
    return (
      <CaseStudyView
        proj={proj}
        editMode={editMode}
        onBack={() => setSelectedIdx(null)}
        onSave={cs => {
          const projects = [...data.projects];
          projects[selectedIdx] = { ...proj, caseStudy: cs };
          save({ ...data, projects });
        }}
      />
    );
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "80px 48px 140px" }}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr", alignItems:"start", marginBottom: 52 }}>
        <div>
          <h2 style={{ fontFamily: F_SERIF, fontSize: 52, fontWeight: 700, color: "#111", marginBottom: 6 }}>Work</h2>
          <p style={{ fontSize: 16, color: "#888", fontFamily: F_SANS, fontWeight: 300, fontStyle: "italic" }}>an overview of my career</p>
        </div>
        {(data.workPhotoUrl || editMode) && (
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", width:"100%", marginLeft:86 }}>
            {data.workPhotoUrl && (
              <div style={{ width:"100%" }}>
                <div style={{ width:"100%", borderRadius:20, overflow:"hidden" }}>
                  <img src={data.workPhotoUrl} alt="" style={{ width:"100%", height:"auto", display:"block" }} />
                </div>
                {(data.workPhotoCaption || editMode) && (
                  <div style={{ marginTop:10, textAlign:"center" }}>
                    {editMode
                      ? <input value={data.workPhotoCaption||""} onChange={e=>save({...data,workPhotoCaption:e.target.value})} placeholder="Add a caption…" style={{ ...iSt, fontSize:12, textAlign:"center" }} />
                      : <span style={{ fontSize:12, color:"#555", fontFamily:F_SANS, fontStyle:"italic" }}>{data.workPhotoCaption}</span>
                    }
                  </div>
                )}
              </div>
            )}
            {editMode && <div style={{ marginTop:8, width:"100%" }}><EF label="Work page photo URL" value={data.workPhotoUrl||""} onChange={v=>save({...data,workPhotoUrl:v})} ph="/photo.jpg or https://..." /></div>}
          </div>
        )}
      </div>

      <SLabel text="Experience" />
      {data.experience.map((exp, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "170px 1fr", gap: 36, padding: "32px 0", borderBottom: "1px solid #f0f0ee" }}>
          {editMode ? (
            <div style={{ gridColumn: "1/-1", background: "#fafafa", borderRadius: 14, padding: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 4 }}>
                <EF label="Title" value={exp.title} onChange={v => ue(i,"title",v)} />
                <EF label="Company" value={exp.company} onChange={v => ue(i,"company",v)} />
                <EF label="Date" value={exp.date} onChange={v => ue(i,"date",v)} />
              </div>
              <EF label="Team / Dept" value={exp.dept||""} onChange={v => ue(i,"dept",v)} />
              <div style={{ fontSize:10, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"#aaa", marginBottom:8 }}>Achievements</div>
              {exp.bullets.map((b,bi) => (
                <div key={bi} style={{ display:"flex", gap:8, marginBottom:7 }}>
                  <input value={b} onChange={e=>ub(i,bi,e.target.value)} style={iSt} />
                  <button onClick={()=>rb(i,bi)} style={{ background:"none", border:"none", color:"#c05050", cursor:"pointer", fontSize:16, padding:"0 8px" }}>✕</button>
                </div>
              ))}
              <AddBtn onClick={()=>ab(i)} label="Add bullet" />
              <div style={{ marginTop:12 }}><RemBtn onClick={()=>re(i)} /></div>
            </div>
          ) : (
            <>
              <div>
                <div style={{ fontSize: 13, color: "#aaa", fontWeight: 500, marginBottom: 5, fontFamily: F_SANS }}>{exp.date}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#333", fontFamily: F_SANS }}>{exp.company}</div>
                {exp.dept && <div style={{ fontSize: 13, color: "#bbb", fontFamily: F_SANS, marginTop: 2 }}>{exp.dept}</div>}
              </div>
              <div>
                <div style={{ fontFamily: F_SERIF, fontSize: 21, fontWeight: 700, color: "#111", marginBottom: 14 }}>{exp.title}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} style={{ fontSize: 15, color: "#555", paddingLeft: 18, position: "relative", lineHeight: 1.68, fontFamily: F_SANS, fontWeight: 300 }}>
                      <span style={{ position: "absolute", left: 0, color: "#bbb", fontSize: 12, top: 4 }}>→</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      ))}
      {editMode && <AddBtn onClick={ae} label="Add experience" />}

      <SLabel text="Featured Projects" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {data.projects.map((proj, i) => (
          <div key={i} style={{ background: "#fafaf8", border: "1px solid #efefed", borderRadius: 18, padding: 28, cursor: editMode ? "default" : "pointer", transition: "box-shadow 0.2s ease" }}
            onClick={() => { if (!editMode) setSelectedIdx(i); }}
            onMouseEnter={e => { if (!editMode) e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}>
            {editMode ? (
              <div>
                <EF label="Title" value={proj.title} onChange={v=>up(i,"title",v)} />
                <EF label="Description" value={proj.desc} onChange={v=>up(i,"desc",v)} multi />
                <EF label="Tags" value={proj.tags.join(", ")} onChange={v=>ut(i,v)} note="— comma separated" />
                <EF label="Link" value={proj.link} onChange={v=>up(i,"link",v)} ph="https://..." />
                <RemBtn onClick={()=>rp(i)} />
              </div>
            ) : (
              <>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
                  <div style={{ fontFamily:F_SERIF, fontSize:19, fontWeight:700, color:"#111" }}>{proj.title}</div>
                  <span style={{ color: PURPLE_MID, fontSize:16, marginLeft:8 }}>→</span>
                </div>
                <div style={{ fontSize:15, color:"#555", lineHeight:1.72, marginBottom:16, fontFamily:F_SANS, fontWeight:300 }}>{proj.desc}</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {proj.tags.map((t,ti) => { const c=tagC[ti%tagC.length]; return <span key={ti} style={{ fontSize:10, fontWeight:600, letterSpacing:"0.06em", textTransform:"uppercase", padding:"5px 14px", borderRadius:100, background:c.bg, color:c.color, border:`1px solid ${c.border}`, fontFamily:F_SANS }}>{t}</span>; })}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {editMode && <div style={{ marginTop:12 }}><AddBtn onClick={ap} label="Add project" /></div>}

      <SLabel text="Skills" />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
        {data.skills.map((sk,i) => (
          <div key={i} style={{ background:"#fff", border:"1px solid #efefed", borderRadius:14, padding:"16px 18px" }}>
            {editMode ? (
              <div>
                <input value={sk.name} onChange={e=>us(i,"name",e.target.value)} style={{ width:"100%", background:"transparent", border:"none", borderBottom:"1px solid #e5e5e5", color:"#111", fontSize:13, padding:"3px 0", marginBottom:10, fontFamily:F_SANS, outline:"none" }} />
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <input type="range" min={10} max={100} value={sk.pct} onChange={e=>us(i,"pct",Number(e.target.value))} style={{ flex:1 }} />
                  <span style={{ fontSize:11, color:"#999", width:30 }}>{sk.pct}%</span>
                  <button onClick={()=>rs(i)} style={{ background:"none", border:"none", color:"#c05050", cursor:"pointer", fontSize:13 }}>✕</button>
                </div>
              </div>
            ) : (
              <>
                <div style={{ fontSize:13, fontWeight:500, color:"#222", marginBottom:10, fontFamily:F_SANS }}>{sk.name}</div>
                <div style={{ height:3, background:"#f0eeec", borderRadius:100, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:`${sk.pct}%`, borderRadius:100, background: PURPLE_MID }} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {editMode && <div style={{ marginTop:10 }}><AddBtn onClick={as2} label="Add skill" /></div>}

      <SLabel text="Education" />
      <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
        {data.education.map((edu,i) => (
          <div key={i} style={{ display:"flex", gap:18, padding:"20px 22px", background:"#fff", border:"1px solid #efefed", borderRadius:16, alignItems:"flex-start" }}>
            {editMode ? (
              <div style={{ flex:1 }}>
                <EF label="Degree / Cert" value={edu.degree} onChange={v=>ued(i,"degree",v)} />
                <EF label="School" value={edu.school} onChange={v=>ued(i,"school",v)} />
                <EF label="Year / Details" value={edu.year} onChange={v=>ued(i,"year",v)} />
                <RemBtn onClick={()=>red(i)} />
              </div>
            ) : (
              <>
                <div style={{ width:44, height:44, borderRadius:12, background:"#f0eeec", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{edu.icon}</div>
                <div>
                  <div style={{ fontFamily:F_SERIF, fontSize:16, fontWeight:700, color:"#111", marginBottom:3 }}>{edu.degree}</div>
                  <div style={{ fontSize:14, color:"#555", fontFamily:F_SANS, marginBottom:2 }}>{edu.school}</div>
                  <div style={{ fontSize:12, color:"#aaa", fontFamily:F_SANS }}>{edu.year}</div>
                </div>
              </>
            )}
          </div>
        ))}
        {editMode && <AddBtn onClick={aed} label="Add education" />}
      </div>

      <SLabel text="Volunteering" />
      <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
        {data.volunteering.map((v,i) => (
          <div key={i} style={{ padding:"22px 24px", background:"#fafaf8", border:"1px solid #efefed", borderRadius:16 }}>
            {editMode ? (
              <div>
                <EF label="Organization" value={v.org} onChange={val=>uv(i,"org",val)} />
                <EF label="Role" value={v.role} onChange={val=>uv(i,"role",val)} />
                <EF label="Description" value={v.desc} onChange={val=>uv(i,"desc",val)} multi />
                <RemBtn onClick={()=>rv(i)} />
              </div>
            ) : (
              <>
                <div style={{ fontFamily:F_SERIF, fontSize:17, fontWeight:700, color:"#111", marginBottom:3 }}>{v.org}</div>
                <div style={{ fontSize:11, fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:"#aaa", marginBottom:10, fontFamily:F_SANS }}>{v.role}</div>
                <div style={{ fontSize:15, color:"#555", lineHeight:1.68, fontFamily:F_SANS, fontWeight:300 }}>{v.desc}</div>
              </>
            )}
          </div>
        ))}
        {editMode && <AddBtn onClick={av} label="Add volunteering" />}
      </div>

      <SLabel text="Tech Stack" />
      {editMode && <div style={{ marginBottom:14 }}><EF label="Tools" value={data.techStack.join(", ")} onChange={v=>save({...data,techStack:v.split(",").map(t=>t.trim()).filter(Boolean)})} note="— comma separated" /></div>}
      <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
        {data.techStack.map((t,i) => (
          <div key={i} style={{ background:"#fff", border:"1px solid #efefed", borderRadius:100, padding:"9px 20px", fontSize:13, fontWeight:500, color:"#444", fontFamily:F_SANS }}>{t}</div>
        ))}
      </div>
    </div>
  );
}

// ── Rich textarea (Tab indent, Ctrl+B bold) ───────────────────────────────────
function RichTextarea({ value, onChange, placeholder }) {
  const ref = useRef(null);
  const onKeyDown = e => {
    const el = ref.current;
    const start = el.selectionStart, end = el.selectionEnd;
    if (e.key === "Tab") {
      e.preventDefault();
      const next = value.slice(0, start) + "    " + value.slice(end);
      onChange(next);
      requestAnimationFrame(() => { el.selectionStart = el.selectionEnd = start + 4; });
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "b") {
      e.preventDefault();
      const sel = value.slice(start, end);
      const next = value.slice(0, start) + `**${sel}**` + value.slice(end);
      onChange(next);
      requestAnimationFrame(() => {
        if (sel.length === 0) { el.selectionStart = el.selectionEnd = start + 2; }
        else { el.selectionStart = start; el.selectionEnd = end + 4; }
      });
    }
  };
  return (
    <textarea ref={ref} value={value} onChange={e => onChange(e.target.value)} onKeyDown={onKeyDown}
      placeholder={placeholder} style={{ ...taSt, minHeight: 140 }} />
  );
}

// ── Rich text renderer (**bold**, ==highlight==) ──────────────────────────────
function RichText({ text }) {
  const tokens = [];
  let s = text;
  while (s.length > 0) {
    const bi = s.indexOf("**"), hi = s.indexOf("==");
    const next = (bi === -1 && hi === -1) ? -1 : (bi === -1) ? hi : (hi === -1) ? bi : Math.min(bi, hi);
    if (next === -1) { tokens.push({ t: "text", v: s }); break; }
    if (next > 0) { tokens.push({ t: "text", v: s.slice(0, next) }); s = s.slice(next); }
    if (s.startsWith("**")) {
      const e = s.indexOf("**", 2);
      if (e === -1) { tokens.push({ t: "text", v: s }); break; }
      tokens.push({ t: "bold", v: s.slice(2, e) }); s = s.slice(e + 2);
    } else {
      const e = s.indexOf("==", 2);
      if (e === -1) { tokens.push({ t: "text", v: s }); break; }
      tokens.push({ t: "hl", v: s.slice(2, e) }); s = s.slice(e + 2);
    }
  }
  return <span>{tokens.map((tk, i) => {
    if (tk.t === "bold") return <strong key={i} style={{ fontWeight: 700, color: "#111" }}>{tk.v}</strong>;
    if (tk.t === "hl")   return <mark key={i} style={{ background: PURPLE_LIGHT, color: PURPLE, borderRadius: 3, padding: "1px 4px", fontWeight: 600 }}>{tk.v}</mark>;
    return <span key={i}>{tk.v}</span>;
  })}</span>;
}

function safeTruncate(text, limit) {
  if (text.length <= limit) return text;
  let slice = text.slice(0, limit);
  // If we cut inside a **bold** pair, trim back to before the opening **
  if (((slice.match(/\*\*/g) || []).length) % 2 !== 0)
    slice = slice.slice(0, slice.lastIndexOf("**"));
  // Same for ==highlight==
  if (((slice.match(/==/g) || []).length) % 2 !== 0)
    slice = slice.slice(0, slice.lastIndexOf("=="));
  return slice.replace(/\s\S*$/, "") + "…";
}

function ContentItem({ item, tc, isLast }) {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 160;
  const full = item.takeaways || "";
  return (
    <div style={{ display:"flex", gap:24, padding:"28px 0", borderBottom: isLast ? "none" : "1px solid #f0f0ee", alignItems:"flex-start" }}>
      <div style={{ width:96, height:96, borderRadius:12, overflow:"hidden", flexShrink:0, background:tc.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
        {item.cover
          ? <img src={item.cover} alt={item.showName} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
          : <span style={{ fontSize:28 }}>{item.type==="Podcast"?"🎙":item.type==="Book"?"📖":"▶"}</span>}
      </div>
      <div style={{ flex:1 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
          <span style={{ fontSize:10, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", padding:"3px 10px", borderRadius:100, background:tc.bg, color:tc.color, fontFamily:F_SANS }}>{item.type}</span>
          {item.author && <span style={{ fontSize:12, color:"#666", fontFamily:F_SANS }}>{item.author}</span>}
        </div>
        {item.showName && <div style={{ fontSize:11, fontWeight:600, color:"#888", textTransform:"uppercase", letterSpacing:"0.08em", fontFamily:F_SANS, marginBottom:3 }}>{item.showName}</div>}
        {(item.episodeName || item.showName) && (
          item.link
            ? <a href={item.link} target="_blank" rel="noreferrer" style={{ fontFamily:F_SERIF, fontSize:18, fontWeight:700, color:"#111", textDecoration:"none", lineHeight:1.3, display:"block", marginBottom:10 }}>{item.episodeName || item.showName} ↗</a>
            : <div style={{ fontFamily:F_SERIF, fontSize:18, fontWeight:700, color:"#111", lineHeight:1.3, marginBottom:10 }}>{item.episodeName || item.showName}</div>
        )}
        {full && (
          <div style={{ marginTop:10, borderLeft:`3px solid ${PURPLE_LIGHT}`, paddingLeft:12 }}>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:PURPLE_MID, fontFamily:F_SANS, marginBottom:8 }}>My Reflection</div>
            {(expanded ? full : safeTruncate(full, LIMIT)).split("\n").filter(Boolean).map((line, li) => (
              <p key={li} style={{ lineHeight:1.75, fontFamily:F_SANS, fontWeight:300, fontSize:14, color:"#333", margin:0, marginBottom:6 }}>
                <RichText text={line} />
              </p>
            ))}
            {full.length > LIMIT && (
              <button onClick={() => setExpanded(e => !e)} style={{ background:"none", border:"none", color:PURPLE_MID, fontSize:13, fontWeight:600, cursor:"pointer", padding:0, fontFamily:F_SANS, marginTop:6 }}>
                {expanded ? "Show less" : "Read more →"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── PROFILE ───────────────────────────────────────────────────────────────────
function ProfileScreen({ data, editMode, save }) {
  const ui=(i,f,v)=>{const n=[...data.interests];n[i]={...n[i],[f]:v};save({...data,interests:n});};
  const ai=()=>save({...data,interests:[...data.interests,{emoji:"🌟",label:"Interest"}]});
  const ri=(i)=>save({...data,interests:data.interests.filter((_,x)=>x!==i)});
  const content = data.content || [];
  const uc=(i,f,v)=>{const n=[...content];n[i]={...n[i],[f]:v};save({...data,content:n});};
  const [activeFilter, setActiveFilter] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const FILTERS = ["PM & Strategy", "Fiction"];
  const COLLAPSED_COUNT = 3;
  const ac=()=>save({...data,content:[...content,{type:"Podcast",showName:"",episodeName:"",author:"",link:"",cover:"",takeaways:"",category:""}]});
  const rc=(i)=>save({...data,content:content.filter((_,x)=>x!==i)});
  const TYPE_COLORS = { Podcast:{ bg:"#ede9fe", color: PURPLE }, Book:{ bg:"#fef3c7", color:"#92400e" }, Video:{ bg:"#dcfce7", color:"#166534" } };

  const INTEREST_COLORS = [
    { bg:"#ede9fe", color: PURPLE },
    { bg:"#fef3c7", color:"#92400e" },
    { bg:"#dcfce7", color:"#166534" },
    { bg:"#fce7f3", color:"#9d174d" },
    { bg:"#dbeafe", color:"#1e40af" },
    { bg:"#ffedd5", color:"#9a3412" },
  ];

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "80px 56px 140px" }}>

      {/* NAME + TITLE */}
      <div style={{ display:"flex", gap:56, alignItems:"center", marginBottom: 40, justifyContent:"center" }}>
        <div style={{ textAlign:"center" }}>
          <h1 style={{ fontFamily: F_SERIF, fontSize: "clamp(40px,5vw,64px)", fontWeight: 700, color: "#111", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 10 }}>{data.name}</h1>
          <div>
            <span style={{ fontSize:11, fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase", color:"#bbb", fontFamily:F_SANS }}>{data.location}</span>
          </div>
        </div>
        {(data.aboutPhotoUrl || data.photoUrl) && (
          <div style={{ flexShrink:0 }}>
            <div style={{ width:540, height:560, borderRadius:20, overflow:"hidden" }}>
              <img src={data.aboutPhotoUrl || data.photoUrl} alt={data.name} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 60%", display:"block" }} />
            </div>
            {(data.aboutPhotoCaption || editMode) && (
              <div style={{ marginTop:10, textAlign:"center" }}>
                {editMode
                  ? <input value={data.aboutPhotoCaption||""} onChange={e=>save({...data,aboutPhotoCaption:e.target.value})} placeholder="Add a caption…" style={{ ...iSt, fontSize:12, textAlign:"center" }} />
                  : <span style={{ fontSize:12, color:"#555", fontFamily:F_SANS, fontStyle:"italic" }}>{data.aboutPhotoCaption}</span>
                }
              </div>
            )}
          </div>
        )}
      </div>


      {/* ABOUT ME */}
      <div style={{ marginBottom:64, textAlign:"center" }}>
        <div style={{ marginBottom:28, textAlign:"left" }}>
          <h2 style={{ fontFamily:F_SERIF, fontSize:24, fontWeight:700, color:"#111", marginBottom:6 }}>About Me</h2>
          <div style={{ width:32, height:3, background:PURPLE, borderRadius:100 }} />
        </div>
        {editMode && <div style={{ marginBottom:16 }}><EF label="About page photo URL" value={data.aboutPhotoUrl||""} onChange={v=>save({...data,aboutPhotoUrl:v})} ph="/photo.jpg or https://..." note="— shown to right of name above" /></div>}
        {editMode && (
          <EditBox title="Long Bio">
            <EF label="About me text" value={data.aboutLong} onChange={v=>save({...data,aboutLong:v})} multi />
          </EditBox>
        )}
        {data.aboutLong.split("\n\n").map((p,i) => (
          <p key={i} style={{ fontSize:16, lineHeight:1.9, color:"#444", marginBottom:18, fontFamily:F_SANS, fontWeight:300 }}>{p}</p>
        ))}
      </div>

      {/* CONTENT */}
      {(content.length > 0 || editMode) && (
        <div style={{ marginBottom: 64 }}>
          {editMode ? (
            <div style={{ marginBottom: 20 }}>
              <EF label="Section title" value={data.contentTitle || "Currently"} onChange={v=>save({...data,contentTitle:v})} />
            </div>
          ) : (
            <div style={{ marginBottom:24 }}>
              <h2 style={{ fontFamily:F_SERIF, fontSize:24, fontWeight:700, color:"#111", marginBottom:6 }}>{data.contentTitle || "Reads & Listens"}</h2>
              <div style={{ width:32, height:3, background:PURPLE, borderRadius:100, marginBottom:20 }} />
              {/* Filter tags */}
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {FILTERS.map(f => {
                  const active = activeFilter === f;
                  return (
                    <button key={f} onClick={() => { setActiveFilter(active ? null : f); setShowAll(false); }}
                      style={{ fontSize:12, fontWeight:active?700:500, fontFamily:F_SANS, padding:"6px 16px", borderRadius:100, border:`1.5px solid ${active ? PURPLE : "#e0e0e0"}`, background: active ? PURPLE_LIGHT : "#fff", color: active ? PURPLE : "#888", cursor:"pointer", transition:"all 0.15s ease" }}>
                      {f}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {(() => {
            const filtered = content.filter(item => !activeFilter || item.category === activeFilter);
            const visible = showAll ? filtered : filtered.slice(0, COLLAPSED_COUNT);
            return (
              <>
                <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
                  {(editMode ? content : visible).map((item, i) => {
                    const tc = TYPE_COLORS[item.type] || TYPE_COLORS.Podcast;
                    return editMode ? (
                      <div key={i} style={{ background:"#fafafa", border:"1px solid #eee", borderRadius:16, padding:20, marginBottom:16 }}>
                        <div style={{ display:"grid", gridTemplateColumns:"100px 1fr 140px", gap:8, marginBottom:8 }}>
                          <select value={item.type} onChange={e=>uc(i,"type",e.target.value)} style={{ ...iSt, padding:"9px 10px" }}>
                            <option>Podcast</option><option>Book</option><option>Video</option>
                          </select>
                          <EF label="Host / Author" value={item.author} onChange={v=>uc(i,"author",v)} />
                          <div>
                            <div style={{ fontSize:10, fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color:"#999", marginBottom:5 }}>Category</div>
                            <select value={item.category||""} onChange={e=>uc(i,"category",e.target.value)} style={{ ...iSt, padding:"9px 10px" }}>
                              <option value="">None</option>
                              {FILTERS.map(f => <option key={f}>{f}</option>)}
                            </select>
                          </div>
                        </div>
                        <EF label="Show / Book name" value={item.showName||""} onChange={v=>uc(i,"showName",v)} />
                        <EF label="Episode name (if podcast)" value={item.episodeName||""} onChange={v=>uc(i,"episodeName",v)} />
                        <EF label="Link" value={item.link} onChange={v=>uc(i,"link",v)} ph="https://open.spotify.com/..." />
                        <EF label="Cover image URL" value={item.cover} onChange={v=>uc(i,"cover",v)} ph="/cover.jpg or https://..." />
                        <div style={{ marginBottom: 12 }}>
                          <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: F_SANS }}>Takeaways / thoughts</div>
                          <RichTextarea value={item.takeaways} onChange={v=>uc(i,"takeaways",v)} placeholder="Write your thoughts… Tab to indent, Ctrl+B to bold" />
                        </div>
                        <RemBtn onClick={()=>rc(i)} />
                      </div>
                    ) : (
                      <ContentItem key={i} item={item} tc={tc} isLast={i === visible.length - 1} />
                    );
                  })}
                </div>
                {!editMode && filtered.length > COLLAPSED_COUNT && (
                  <button onClick={() => setShowAll(s => !s)}
                    style={{ marginTop:16, background:"none", border:`1.5px solid #e0e0e0`, borderRadius:100, color:"#888", fontSize:13, fontWeight:600, padding:"8px 24px", cursor:"pointer", fontFamily:F_SANS, width:"100%", transition:"all 0.15s ease" }}>
                    {showAll ? "Show less" : `Show ${filtered.length - COLLAPSED_COUNT} more`}
                  </button>
                )}
              </>
            );
          })()}
          {editMode && <div style={{ marginTop:16 }}><AddBtn onClick={ac} label="Add content" /></div>}
        </div>
      )}

      {/* INTERESTS */}
      <div style={{ marginTop: 64 }}>
        <div style={{ marginBottom:24 }}>
          <h2 style={{ fontFamily:F_SERIF, fontSize:24, fontWeight:700, color:"#111", marginBottom:6 }}>Interests</h2>
          <div style={{ width:32, height:3, background:PURPLE, borderRadius:100 }} />
        </div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
          {data.interests.map((it,i) => {
            const ic = INTEREST_COLORS[i % INTEREST_COLORS.length];
            return editMode ? (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:6, background:ic.bg, borderRadius:100, padding:"10px 16px" }}>
                <input value={it.emoji} onChange={e=>ui(i,"emoji",e.target.value)} style={{ width:28, background:"transparent", border:"none", fontSize:16, fontFamily:"inherit", outline:"none" }} />
                <input value={it.label} onChange={e=>ui(i,"label",e.target.value)} style={{ width:90, background:"transparent", border:"none", fontSize:13, color:ic.color, fontFamily:F_SANS, fontWeight:600, outline:"none" }} />
                <button onClick={()=>ri(i)} style={{ background:"none", border:"none", color:"#c05050", cursor:"pointer", fontSize:11, padding:0 }}>✕</button>
              </div>
            ) : (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:8, background:ic.bg, color:ic.color, borderRadius:100, padding:"12px 20px", fontSize:14, fontWeight:600, fontFamily:F_SANS }}>
                <span style={{ fontSize:18 }}>{it.emoji}</span>
                {it.label}
              </div>
            );
          })}
          {editMode && <AddBtn onClick={ai} label="Add interest" />}
        </div>
      </div>
    </div>
  );
}

// ── PASSWORD MODAL ────────────────────────────────────────────────────────────
function PassModal({ mode, onSuccess, onClose, setPassword, checkPassword }) {
  const [p, setP] = useState(""); const [p2, setP2] = useState(""); const [err, setErr] = useState("");
  const isSetup = mode === "setup";
  const handle = () => {
    if (isSetup) { if (!p) { setErr("Enter a password"); return; } if (p !== p2) { setErr("Passwords don't match"); return; } setPassword(p); onSuccess(); }
    else { if (!checkPassword(p)) { setErr("Incorrect password"); return; } onSuccess(); }
  };
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.3)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:28, backdropFilter:"blur(6px)" }}>
      <div style={{ background:"#fff", border:"1px solid #e8e5e0", borderRadius:20, padding:36, width:"100%", maxWidth:380, boxShadow:"0 20px 60px rgba(0,0,0,0.12)" }}>
        <h3 style={{ fontFamily:F_SERIF, fontSize:22, fontWeight:700, color:"#111", marginBottom:8 }}>{isSetup ? "Set edit password" : "Enter password"}</h3>
        <p style={{ fontSize:14, color:"#777", lineHeight:1.65, marginBottom:22, fontFamily:F_SANS, fontWeight:300 }}>{isSetup ? "Create a password. Only you will be able to edit this portfolio." : "Enter your password to enable editing."}</p>
        <input type="password" placeholder="Password" value={p} onChange={e=>setP(e.target.value)} autoFocus onKeyDown={e=>!isSetup&&e.key==="Enter"&&handle()} style={{ ...iSt, marginBottom:10 }} />
        {isSetup && <input type="password" placeholder="Confirm password" value={p2} onChange={e=>setP2(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handle()} style={{ ...iSt }} />}
        {err && <div style={{ color:"#c05050", fontSize:13, marginTop:8, fontFamily:F_SANS }}>{err}</div>}
        <div style={{ display:"flex", gap:10, marginTop:20 }}>
          <button onClick={onClose} style={{ flex:1, background:"#f5f5f3", border:"none", borderRadius:100, color:"#666", fontSize:14, padding:"12px", cursor:"pointer", fontFamily:F_SANS }}>Cancel</button>
          <button onClick={handle} style={{ flex:1, background:"#111", border:"none", borderRadius:100, color:"#fff", fontSize:14, fontWeight:600, padding:"12px", cursor:"pointer", fontFamily:F_SANS }}>{isSetup ? "Save" : "Unlock"}</button>
        </div>
      </div>
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
const TABS = [
  { id:"home", label:"Home", icon:"⌂" },
  { id:"work", label:"Work", icon:"◈" },
  { id:"profile", label:"About", icon:"◎" },
];

export default function App() {
  const [data, setData] = useState(() => { try { const s=localStorage.getItem(SK); return s?JSON.parse(s):DEFAULT_DATA; } catch { return DEFAULT_DATA; } });
  const [tab, setTab] = useState("home");
  const [editMode, setEditMode] = useState(false);
  const [modal, setModal] = useState(null);
  const [tapCount, setTapCount] = useState(0);
  const tapTimer = useRef(null);

  const save = d => { setData(d); localStorage.setItem(SK, JSON.stringify(d)); };
  const setPassword = pw => { localStorage.setItem(PK, pw); localStorage.setItem(HPK, "true"); };
  const checkPassword = a => { const h=localStorage.getItem(HPK)==="true"; if(!h) return true; return a===localStorage.getItem(PK); };
  const hasPass = () => localStorage.getItem(HPK)==="true";

  const handleNav = id => {
    if (id !== tab) { setTab(id); setTapCount(0); return; }
    const next = tapCount + 1; setTapCount(next); clearTimeout(tapTimer.current);
    if (next >= 5) { setTapCount(0); if (editMode) { setEditMode(false); return; } if (!hasPass()) setModal("setup"); else setModal("password"); }
    else { tapTimer.current = setTimeout(() => setTapCount(0), 1800); }
  };

  return (
    <div style={{ background:"#fff", minHeight:"100vh", color:"#111" }}>
      <link href={FONT_LINK} rel="stylesheet" />
      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; } body { background: #fff; }`}</style>

      {editMode && (
        <div style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 40px", background:"#111", fontFamily:F_SANS }}>
          <span style={{ fontSize:12, fontWeight:500, color:"#aaa", letterSpacing:"0.04em" }}>Edit mode · tap the active tab 5× to exit</span>
          <button onClick={()=>setEditMode(false)} style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:100, color:"#fff", fontSize:12, fontWeight:600, padding:"6px 18px", cursor:"pointer", fontFamily:F_SANS }}>Done</button>
        </div>
      )}

      <div style={{ position:"relative", minHeight:"calc(100vh - 68px)", marginTop: editMode ? 44 : 0 }}>
        <Screen active={tab==="home"}><HomeScreen data={data} editMode={editMode} save={save} /></Screen>
        <Screen active={tab==="work"}><WorkScreen data={data} editMode={editMode} save={save} /></Screen>
        <Screen active={tab==="profile"}><ProfileScreen data={data} editMode={editMode} save={save} /></Screen>
      </div>

      {/* BOTTOM NAV */}
      <div style={{ position:"fixed", bottom:0, left:0, right:0, height:68, display:"flex", alignItems:"center", justifyContent:"center", gap:0, background:"rgba(255,255,255,0.96)", backdropFilter:"blur(20px)", borderTop:"1px solid #f0f0ee", zIndex:100, fontFamily:F_SANS }}>
        {TABS.map(t => (
          <div key={t.id} style={{ position:"relative" }} className="nav-tab-wrap">
            <button onClick={()=>handleNav(t.id)}
              style={{ display:"flex", alignItems:"center", justifyContent:"center", background: tab===t.id ? PURPLE_LIGHT : "transparent", border:"none", cursor:"pointer", padding:"12px 32px", borderRadius:100, color: tab===t.id ? PURPLE : "#bbb", fontFamily:F_SANS, transition:"all 0.2s ease" }}>
              <span style={{ fontSize:20, lineHeight:1 }}>{t.icon}</span>
            </button>
            <div style={{ position:"absolute", bottom:"calc(100% + 8px)", left:"50%", transform:"translateX(-50%)", background:"#111", color:"#fff", fontSize:11, fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", padding:"5px 12px", borderRadius:6, whiteSpace:"nowrap", pointerEvents:"none", opacity:0, transition:"opacity 0.15s ease" }} className="nav-tooltip">
              {t.label}
            </div>
          </div>
        ))}
        <style>{`.nav-tab-wrap:hover .nav-tooltip { opacity: 1 !important; }`}</style>
      </div>

      {modal==="setup" && <PassModal mode="setup" setPassword={setPassword} checkPassword={checkPassword} onSuccess={()=>{setModal(null);setEditMode(true);}} onClose={()=>setModal(null)} />}
      {modal==="password" && <PassModal mode="enter" setPassword={setPassword} checkPassword={checkPassword} onSuccess={()=>{setModal(null);setEditMode(true);}} onClose={()=>setModal(null)} />}
    </div>
  );
}
