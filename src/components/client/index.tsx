"use client";

import { trpc } from "@/trpc/client";
import { PokemonDetailsSkeleton } from "../poke/skeleton";
import { PokemonDetails } from "../poke";
import { useState } from "react";
import { Button } from "../ui/button";

export const Client = () => {
	const [id, setId] = useState<string | undefined>();

	if (!id)
		return (
			<Button onClick={() => setId(prompt("ID") ?? undefined)}>Show</Button>
		);

	return <Comp id={id} />;
};

const Comp = ({ id }: { id: string }) => {
	const pokemon = trpc.pokemon.useQuery({ id });

	if (!pokemon.data) {
		return <PokemonDetailsSkeleton />;
	}

	return <PokemonDetails pokemon={pokemon.data} />;
};
