"use client";

import { trpc } from "@/trpc/client";
import { PokemonDetailsSkeleton } from "../poke/skeleton";
import { PokemonDetails } from "../poke";
import { useState } from "react";
import { Button } from "../ui/button";

export const Client = () => {
	const [id, setId] = useState<string>("1");

	return (
		<div className="flex flex-col gap-4">
			<Comp id={id} />
			<Button onClick={() => setId(prompt("ID") ?? "1")}>Select Pokemon</Button>
		</div>
	);
};

const Comp = ({ id }: { id: string }) => {
	const pokemon = trpc.pokemon.useQuery({ id });

	if (!pokemon.data) {
		return <PokemonDetailsSkeleton />;
	}

	return <PokemonDetails pokemon={pokemon.data} />;
};
