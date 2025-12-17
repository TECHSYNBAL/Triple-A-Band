import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <main className="flex w-full flex-col items-center justify-center p-[60px]">
        <h1 className="mb-8 text-3xl font-semibold">Triple A Band</h1>
        <Image
          src="/Image.svg"
          alt="Triple A Band"
          width={1140}
          height={300}
          className="w-full max-w-[1140px] h-auto"
        />
        <p className="mt-8 text-lg">To be continued</p>
      </main>
    </div>
  );
}
