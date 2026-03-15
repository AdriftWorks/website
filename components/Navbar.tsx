import Link from "next/link"

export default function Navbar() {
return (
<nav
style={{
display: "flex",
justifyContent: "space-between",
padding: "20px 40px",
background: "#0a0a0a",
borderBottom: "1px solid #111"
}}
>
<div style={{ fontWeight: "bold" }}>
ADRIFT WORKS </div>

```
  <div style={{ display: "flex", gap: "20px" }}>
    <Link href="/">Home</Link>
    <Link href="/studio">Studio</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/tools">Tools</Link>
    <Link href="/contact">Contact</Link>
  </div>
</nav>
```

)
}
