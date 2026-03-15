export default function Home() {
return (
<main style={{
background: "#0a0a0a",
color: "#ffffff",
fontFamily: "sans-serif",
minHeight: "100vh",
padding: "40px"
}}>

```
  {/* HERO */}

  <section style={{ marginBottom: "80px" }}>
    <h1 style={{ fontSize: "64px", marginBottom: "10px" }}>
      ADRIFT WORKS
    </h1>

    <p style={{ fontSize: "22px", color: "#aaa" }}>
      Creative Technology Studio
    </p>

    <p style={{ marginTop: "20px", maxWidth: "600px" }}>
      Building experimental software, AI systems, and interactive worlds.
    </p>
  </section>


  {/* PROJECT GRID */}

  <section style={{ marginBottom: "80px" }}>
    <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
      Featured Projects
    </h2>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px"
    }}>

      <div style={{ background: "#111", padding: "20px" }}>
        <h3>AI Indie Game Idea Generator</h3>
        <p>Generate unique indie game concepts.</p>
      </div>

      <div style={{ background: "#111", padding: "20px" }}>
        <h3>Procedural World Builder</h3>
        <p>Tools for creating dynamic game worlds.</p>
      </div>

      <div style={{ background: "#111", padding: "20px" }}>
        <h3>Automation Toolkit</h3>
        <p>AI systems that automate creative workflows.</p>
      </div>

    </div>
  </section>


  {/* SERVICES */}

  <section style={{ marginBottom: "80px" }}>
    <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
      Services
    </h2>

    <p>AI Systems • Game Development • Creative Technology Consulting</p>
  </section>


  {/* CONTACT FORM */}

  <section>
    <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
      Work With Us
    </h2>

    <form action="https://formspree.io/f/mdawlyab" method="POST">

      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        style={{ display: "block", marginBottom: "10px", padding: "10px", width: "300px" }}
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        style={{ display: "block", marginBottom: "10px", padding: "10px", width: "300px" }}
      />

      <textarea
        name="message"
        placeholder="Tell me about your project..."
        rows="5"
        required
        style={{ display: "block", marginBottom: "10px", padding: "10px", width: "300px" }}
      ></textarea>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          background: "#00ffd5",
          border: "none",
          color: "#000",
          fontWeight: "bold"
        }}
      >
        Send Message
      </button>

    </form>
  </section>

</main>
```

)
}
