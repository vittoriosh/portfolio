'use client'

export default function VisualBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">


      {/* Technical Markings */}
      <div className="absolute top-12 left-12 w-8 h-8 border-l-2 border-t-2 border-foreground/10" />
      <div className="absolute top-12 right-12 w-8 h-8 border-r-2 border-t-2 border-foreground/10" />
      <div className="absolute bottom-12 left-12 w-8 h-8 border-l-2 border-b-2 border-foreground/10" />
      <div className="absolute bottom-12 right-12 w-8 h-8 border-r-2 border-b-2 border-foreground/10" />

      {/* Static Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-foreground/5 rounded-full blur-[100px] opacity-10" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[130px] opacity-10" />

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  )
}
