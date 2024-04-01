import {Example} from "@/app/caching-callback/Example";
import {Header} from "@/app/Header";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center gap-4 p-24">
          <Header />
          <div className="container">
              <Example/>
          </div>
      </main>
  );
}
