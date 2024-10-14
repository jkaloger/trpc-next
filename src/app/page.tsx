import { Client } from "@/components/client";
import { PokemonDetailsSkeleton } from "@/components/poke/skeleton";
import { Server } from "@/components/server";
import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";

export default function Home() {
  void trpc.pokemon.prefetch({ id: "1" });
  return (
    <div className="m-8 gap-12 flex items-start justify-center flex-wrap">
      <div>
        <h2>Hydrated Client</h2>
        <div>
          <HydrateClient>
            <Client />
          </HydrateClient>
        </div>
      </div>
      <div>
        <h2>Suspended Server</h2>
        <div>
          <Suspense fallback={<PokemonDetailsSkeleton />}>
            <Server />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
