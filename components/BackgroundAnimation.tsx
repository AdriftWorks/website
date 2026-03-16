"use client"

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      <div className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl top-[-200px] left-[-200px]" />

      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl bottom-[-200px] right-[-200px]" />
    </div>
  )
}
