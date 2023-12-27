import Link from "@/utils/Link";

export default function Home() {
  return (
    <>
      {/*  */}
      <h1>Landing</h1>
      <section className="flex">
        <Link
          className="text-3xl hover:text-blue-500 border border-blue-200 p-4"
          href="/login"
        >
          Login
        </Link>
        <Link
          className="text-3xl hover:text-blue-500 border border-blue-200 p-4"
          href="/monitor"
        >
          Monitor
        </Link>
      </section>
    </>
  );
}
