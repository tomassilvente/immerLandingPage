import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex gap-8 justify-center bg-white p-10">
      <p className="text-lg font-bold">Home Page Testing</p>
      <Link href="/blog" className="text-primary text-base">
        Blog Updates
      </Link>
      <Link href="/signup" className="text-primary text-base">
        Sign Up
      </Link>
      <Link href="/landingPage" className="text-primary text-base">
        Landing Ppage
      </Link>
    </div>
  );
}
