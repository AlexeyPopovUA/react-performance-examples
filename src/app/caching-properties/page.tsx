import {Example} from "@/app/caching-properties/Example";
import {Header} from "@/app/Header";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center gap-4 p-24">
          <Header />
          <Example/>
      </main>
  );
}
