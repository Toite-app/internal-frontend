import { Button } from "@/components/ui/button";
// import { Link } from "@/navigation";
import Image from "next/image";
import TOITE_CONFIG from "@/toite.config";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-stone-100 dark:bg-stone-900">
      <div className="text-center">
        <div className="relative mb-8 h-16 w-48">
          <Image
            src={TOITE_CONFIG.logo.svg}
            fill
            style={{
              width: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
            alt=""
            priority
          />
        </div>
        {/* <h1 className="text-6xl font-bold">404</h1> */}
        <p className="mt-4 text-xl text-stone-600 dark:text-stone-400">
          Page not found
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return to Dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
