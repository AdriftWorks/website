export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      padding: "40px",
      textAlign: "center"
    }}>
      
      <h1 style={{fontSize: "48px", marginBottom: "10px"}}>
        Adrift Works
      </h1>

      <p style={{fontSize: "20px", maxWidth: "600px", marginBottom: "40px"}}>
        We build AI tools and automation systems that help people
        start businesses, save time, and make money online.
      </p>

      <div style={{
        border: "1px solid #ddd",
        padding: "30px",
        borderRadius: "10px",
        maxWidth: "500px"
      }}>
        
        <h2 style={{marginBottom: "10px"}}>
          First Tool Launching Soon
        </h2>

        <p style={{marginBottom: "20px"}}>
          An AI business idea generator that creates profitable
          startup ideas based on your skills and interests.
        </p>


<form action="https://formspree.io/f/mdawlyab" method="POST">

<input
type="text"
name="name"
placeholder="Your name"
required
/>

<input
type="email"
name="email"
placeholder="Your email"
required
/>

<textarea
name="message"
placeholder="Tell me what you're building or what you need..."
rows="5"
required
></textarea>

<button type="submit">
Send Message
</button>

</form>

        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            style={{
              padding: "12px",
              width: "70%",
              marginRight: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px 20px",
              borderRadius: "6px",
              border: "none",
              background: "black",
              color: "white",
              cursor: "pointer"
            }}
          >
            Join Waitlist
          </button>
        </form>

      </div>

      <p style={{marginTop: "40px", fontSize: "14px", opacity: 0.6}}>
        © {new Date().getFullYear()} Adrift Works
      </p>

    </main>
  );
}
