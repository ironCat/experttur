import type { FC } from "react";
import { TOP_DESTINATIONS } from "./const";

interface Props {
    countries: { name: string; slug: string }[];
}

export const TopDestination: FC<Props> = async ({ countries }) => {
    return (
        <section className="space-y-5">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                    <h2 className="font-heading text-xl font-semibold">
                        Top destinations
                    </h2>
                    <div className="flex flex-wrap gap-2 text-xs mt-2">
                        {countries.map(country =>
                            <a
                                key={country.slug}
                                href={`/countries/${country.slug}`}
                                className="rounded-full bg-[hsl(var(--muted))] px-3 py-1 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                            >
                                {country.name}
                            </a>
                        )}
                    </div>
                </div>
            </header>
            <div className="grid gap-4 md:grid-cols-4">
                {TOP_DESTINATIONS.map((item) => (
                    <a
                        key={item.id}
                        href={item.countryHref}
                        className="group flex flex-col rounded-3xl bg-[hsl(var(--muted))] p-1 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="overflow-hidden rounded-3xl">
                            <img
                                src={item.imageUrl}
                                alt={item.countryName}
                                className="aspect-4/5 w-full object-cover"
                            />
                        </div>
                        <div className="mt-2 flex flex-col gap-0.5 px-1 pb-2 text-xs">
                            <p className="line-clamp-1 font-medium text-[hsl(var(--foreground))]">
                                {item.countryName}
                            </p>
                            <p className="text-[0.7rem] text-[hsl(var(--muted-foreground))]">
                                {item.region}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section >
    );
};
