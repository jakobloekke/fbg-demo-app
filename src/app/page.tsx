function Niko() {
  return <div className="text-niko">Brok</div>
}

function Rasmus() {
  return <div className="text-niko">Rasmus</div>
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Hej FBG.
      <Rasmus />
      <Niko />
      <Niko />
      <Niko />
      <Niko />
      <Niko />
      <Niko />
      <Niko />
    </main>
  )
}
