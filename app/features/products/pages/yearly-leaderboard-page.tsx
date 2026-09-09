import { DateTime } from "luxon";
import type { Route } from "./+types/yearly-leaderboard-page";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z
  .object({
    year: z.coerce.number().int().min(2000).max(2100),
  })
  .refine(
    ({ year }) =>
      DateTime.fromObject({ year, month: 1, day: 1 }, { zone: "Asia/Seoul" })
        .isValid,
    { message: "Invalid calendar year", path: ["year"] },
  );

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    {
      title: `Yearly Leaderboard - ${params.year}`,
    },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { success, data } = paramsSchema.safeParse(params);
  if (!success) {
    throw new Error("Invalid params");
  }
  const date = DateTime.fromObject(
    { year: data.year, month: 1, day: 1 },
    { zone: "Asia/Seoul" },
  );
  if (!date.isValid) {
    throw new Error("Invalid date");
  }
  const currentYear = DateTime.now().setZone("Asia/Seoul").startOf("year");
  if (date > currentYear) {
    throw new Error("Date is in the future");
  }
  return { date: date.toMillis(), isCurrentYear: date.equals(currentYear) };
};

export default function YearlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromMillis(loaderData.date, { zone: "Asia/Seoul" });
  const previousYear = urlDate.minus({ years: 1 });
  const nextYear = urlDate.plus({ years: 1 });
  return (
    <div className="container mx-auto space-y-8 px-4 py-8 md:space-y-10">
      <Hero
        title={`The best products of ${urlDate.year}`}
        description=""
        titleClassName="text-center"
      />
      <div className="flex items-center justify-center gap-2">
        {previousYear.year >= 2000 && (
          <Button
            variant="secondary"
            nativeButton={false}
            render={(props) => (
              <Link
                {...props}
                to={`/products/leaderboards/yearly/${previousYear.year}`}
              />
            )}
          >
            &larr; {previousYear.year}
          </Button>
        )}
        {!loaderData.isCurrentYear && nextYear.year <= 2100 && (
          <Button
            variant="secondary"
            nativeButton={false}
            render={(props) => (
              <Link
                {...props}
                to={`/products/leaderboards/yearly/${nextYear.year}`}
              />
            )}
          >
            {nextYear.year} &rarr;
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
