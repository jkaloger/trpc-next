import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PokemonSchema } from "@/trpc/routers/poke";
import Link from "next/link";

type Props = {
	pokemon: PokemonSchema;
};

export const PokemonDetails = ({ pokemon }: Props) => {
	return (
		<Card className="w-full">
			<CardContent className="flex flex-col items-center gap-4 p-6">
				<Link href={`/pokemon/${pokemon.id}`}>
					<Avatar className={cn(["h-48 w-48 p-4", `bg-slate-300`])}>
						<AvatarImage
							alt={pokemon.name}
							src={pokemon.sprites.front_default}
						/>
						<AvatarFallback>{pokemon.name[0].toUpperCase()}</AvatarFallback>
					</Avatar>
				</Link>
				<div className="text-center space-y-1 flex flex-col gap-1">
					<div>
						<p className="text-xs text-black/50 dark:text-white/50">
							#{pokemon.id}
						</p>
						<h3 className="text-2xl font-bold capitalize">{pokemon.name}</h3>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
