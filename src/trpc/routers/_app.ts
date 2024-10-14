import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { pokemonProcedure } from "./poke";
export const appRouter = createTRPCRouter({
	pokemon: pokemonProcedure,
	hello: baseProcedure
		.input(
			z.object({
				text: z.string(),
			}),
		)
		.query((opts) => {
			return {
				greeting: `hello ${opts.input.text}`,
			};
		}),
});

export type AppRouter = typeof appRouter;
