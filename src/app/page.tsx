function Niko() {
  return <div className="text-niko">Brok</div>
}

function LAN() {
  return <div>Lars</div>
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Hej FBG.

      <Niko />
      <Niko />
      <Niko />
      <Niko />
      <Niko />
      <Niko />
      <Niko />
      <LAN />
    </main>
  )
}
