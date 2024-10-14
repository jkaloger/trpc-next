import "server-only";
import { trpc } from "@/trpc/server";
import { PokemonDetails } from "../poke";

export const Server = async () => {
	const pokemon = await trpc.pokemon({ id: "1" });

	return <PokemonDetails pokemon={pokemon} />;
};
