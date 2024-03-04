import {Example} from "@/app/re-rendering-siblings/Example";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center gap-4 p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
                  Explore performance improvements for typical React situations
              </p>
          </div>
          <Example/>
      </main>
  );
}
