export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-8">
        Contact
      </h1>

      <p className="text-neutral-400 mb-10">
        Interested in collaborating or working together? Send a message.
      </p>

      <form
        action="https://formspree.io/f/mdawlyab"
        method="POST"
        className="space-y-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          rows={5}
          className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-neutral-200 transition"
        >
          Send Message
        </button>

      </form>

    </main>
  );
}
