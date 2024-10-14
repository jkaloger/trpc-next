import { z } from "zod";
import { baseProcedure } from "../init";

export const pokemonQuery = z.object({
	id: z.string(),
});
export const pokemonSchema = z.object({
	id: z.number(),
	name: z.string(),
	sprites: z.object({
		front_default: z.string(),
	}),
});

export type PokemonSchema = z.infer<typeof pokemonSchema>;

export const pokemonProcedure = baseProcedure
	.input(pokemonQuery)
	.output(pokemonSchema)
	.query(async ({ input }) => {
		const pokemon = await fetch(
			"https://pokeapi.co/api/v2/pokemon/" + input.id,
		).then((resp) => resp.json());

		return pokemon;
	});
