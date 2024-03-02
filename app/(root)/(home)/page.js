import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Where is my pet?</h1>
      <Image
        src="/images/pet.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
