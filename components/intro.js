import Image from "next/image"

export default function Intro() {
  return (
    <section className="">
      <h1 className="text-5xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        Home Landing Section
      </h1>
      <Image 
        src='/laughing-pic.webp'
        width={250}
        height={250}
        alt="Picture of the author"
      />
        
     
    </section>
  )
}
