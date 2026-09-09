import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z
  .object({
    year: z.coerce.number().int().min(2000).max(2100),
    month: z.coerce.number().int().min(1).max(12),
    day: z.coerce.number().int().min(1).max(31),
  })
  .refine((value) => DateTime.fromObject(value).isValid, {
    message: "Invalid calendar date",
    path: ["day"],
  });

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    {
      title: `Daily Leaderboard - ${params.year}.${params.month}.${params.day}`,
    },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { success, data } = paramsSchema.safeParse(params);
  if (!success) {
    throw new Error("Invalid params");
  }
  const date = DateTime.fromObject(data);
  if (!date.isValid) {
    throw new Error("Invalid date");
  }
  const today = DateTime.now().startOf("day");
  if (date > today) {
    throw new Error("Date is in the future");
  }
  return { date: date.toMillis() };
};

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromMillis(loaderData.date);
  const previousDay = urlDate.minus({ days: 1 });
  const nextDay = urlDate.plus({ days: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("day"));
  return (
    <div className="container mx-auto space-y-8 px-4 py-8 md:space-y-10">
      <Hero
        title={`The best products of ${urlDate.toLocaleString(DateTime.DATE_MED)}`}
        description=""
        titleClassName="text-center"
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary">
          <Link
            to={`/products/leaderboards/daily/${previousDay.year}/${previousDay.month}/${previousDay.day}`}
          >
            &larr; {previousDay.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isToday && (
          <Button variant="secondary">
            <Link
              to={`/products/leaderboards/daily/${nextDay.year}/${nextDay.month}/${nextDay.day}`}
            >
              {nextDay.toLocaleString(DateTime.DATE_SHORT)} &rarr;
            </Link>
          </Button>
        )}
      </div>
      <div className="mx-auto w-full max-w-4xl space-y-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            key={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}
