import { DateTime } from "luxon";
import type { Route } from "./+types/weekly-leaderboard-page";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z
  .object({
    year: z.coerce.number().int().min(2000).max(2100),
    week: z.coerce.number().int().min(1).max(53),
  })
  .refine(
    ({ year, week }) =>
      DateTime.fromObject(
        { weekYear: year, weekNumber: week, weekday: 1 },
        { zone: "Asia/Seoul" },
      ).isValid,
    { message: "Invalid ISO week", path: ["week"] },
  );

export const meta: Route.MetaFunction = ({ loaderData }) => {
  if (!loaderData) {
    return [{ title: "Weekly Leaderboard | wemake" }];
  }

  const urlDate = DateTime.fromMillis(loaderData.date, { zone: "Asia/Seoul" });
  return [
    {
      title: `Weekly Leaderboard - ${urlDate.startOf("week").toLocaleString(DateTime.DATE_SHORT)} - ${urlDate.endOf("week").toLocaleString(DateTime.DATE_SHORT)}`,
    },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { success, data } = paramsSchema.safeParse(params);
  if (!success) {
    throw new Error("Invalid params");
  }
  const date = DateTime.fromObject(
    { weekYear: data.year, weekNumber: data.week, weekday: 1 },
    { zone: "Asia/Seoul" },
  );
  if (!date.isValid) {
    throw new Error("Invalid date");
  }
  const currentWeek = DateTime.now().setZone("Asia/Seoul").startOf("week");
  if (date > currentWeek) {
    throw new Error("Date is in the future");
  }
  return { date: date.toMillis(), isCurrentWeek: date.equals(currentWeek) };
};

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromMillis(loaderData.date, { zone: "Asia/Seoul" });
  const previousWeek = urlDate.minus({ weeks: 1 });
  const nextWeek = urlDate.plus({ weeks: 1 });
  return (
    <div className="container mx-auto space-y-8 px-4 py-8 md:space-y-10">
      <Hero
        title={`The best products of Week ${urlDate.startOf("week").toLocaleString(DateTime.DATE_SHORT)} - ${urlDate.endOf("week").toLocaleString(DateTime.DATE_SHORT)}`}
        description=""
        titleClassName="text-center"
      />
      <div className="flex items-center justify-center gap-2">
        {previousWeek.weekYear >= 2000 && (
          <Button
            variant="secondary"
            nativeButton={false}
            render={(props) => (
              <Link
                {...props}
                to={`/products/leaderboards/weekly/${previousWeek.weekYear}/${previousWeek.weekNumber}`}
              />
            )}
          >
            &larr;{" "}
            {previousWeek.startOf("week").toLocaleString(DateTime.DATE_SHORT)} -{" "}
            {previousWeek.endOf("week").toLocaleString(DateTime.DATE_SHORT)}
          </Button>
        )}
        {!loaderData.isCurrentWeek && nextWeek.weekYear <= 2100 && (
          <Button
            variant="secondary"
            nativeButton={false}
            render={(props) => (
              <Link
                {...props}
                to={`/products/leaderboards/weekly/${nextWeek.weekYear}/${nextWeek.weekNumber}`}
              />
            )}
          >
            {nextWeek.startOf("week").toLocaleString(DateTime.DATE_SHORT)} -{" "}
            {nextWeek.endOf("week").toLocaleString(DateTime.DATE_SHORT)} &rarr;
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
