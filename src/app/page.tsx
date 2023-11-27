function Niko() {
  return <div className="text-niko">Brok</div>
}

function Thomas() {
  return <div>Thomas "TDC" Christensen</div>
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

      <Thomas />
    </main>
  )
}
