import { initTRPC } from "@trpc/server";
import { cache } from "react";

export const createTRPCContext = cache(async () => {
	return {
		userId: "jack",
	};
});

const trpc = initTRPC.create({});

export const createTRPCRouter = trpc.router;
export const baseProcedure = trpc.procedure;
export const createCallerFactory = trpc.createCallerFactory;
