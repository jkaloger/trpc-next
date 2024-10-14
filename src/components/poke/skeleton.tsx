import { CardContent, Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const PokemonDetailsSkeleton = () => {
	return (
		<Card className="w-full max-w-sm">
			<CardContent className="flex flex-col items-center gap-4 p-6">
				<Skeleton className={cn(["h-48 w-48 bg-white/10"])} />
				<div className="text-center space-y-1 flex flex-col items-center">
					<Skeleton className="w-12 h-8 font-bold bg-white/10" />
					<Skeleton className={cn("rounded-sm w-8 h-4 bg-white/10")} />
				</div>
				<Skeleton className="w-full h-6" />
			</CardContent>
		</Card>
	);
};
