"use client"

import { useState } from "react"

export default function Contact() {

const [status, setStatus] = useState("")

async function handleSubmit(e:any){
e.preventDefault()

const formData = new FormData(e.target)

const res = await fetch("https://formspree.io/f/mdawlyab",{
method:"POST",
body:formData,
headers:{Accept:"application/json"}
})

if(res.ok){
setStatus("Message Sent!")
e.target.reset()
}else{
setStatus("Error sending message")
}
}

return (

<section className="py-20 px-6 max-w-3xl mx-auto">

<h2 className="text-4xl font-bold mb-8 text-center">
Contact
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input
name="name"
placeholder="Name"
required
className="w-full p-3 rounded bg-neutral-900"
/>

<input
name="email"
type="email"
placeholder="Email"
required
className="w-full p-3 rounded bg-neutral-900"
/>

<textarea
name="message"
placeholder="Message"
required
rows={5}
className="w-full p-3 rounded bg-neutral-900"
/>

<button
type="submit"
className="px-6 py-3 bg-white text-black rounded hover:scale-105 transition"
>
Send Message
</button>

</form>

<p className="mt-4 text-center">{status}</p>

</section>

)
}
