import { DateTime } from "luxon";
import type { Route } from "./+types/monthly-leaderboard-page";
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
  })
  .refine(
    ({ year, month }) =>
      DateTime.fromObject({ year, month, day: 1 }, { zone: "Asia/Seoul" })
        .isValid,
    { message: "Invalid calendar month", path: ["month"] },
  );

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { success, data } = paramsSchema.safeParse(params);
  if (!success) {
    throw new Error("Invalid params");
  }
  const date = DateTime.fromObject(
    { year: data.year, month: data.month, day: 1 },
    { zone: "Asia/Seoul" },
  );
  if (!date.isValid) {
    throw new Error("Invalid date");
  }
  const currentMonth = DateTime.now().setZone("Asia/Seoul").startOf("month");
  if (date > currentMonth) {
    throw new Error("Date is in the future");
  }
  return { date: date.toMillis(), isCurrentMonth: date.equals(currentMonth) };
};

export default function MonthlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromMillis(loaderData.date, { zone: "Asia/Seoul" });
  const previousMonth = urlDate.minus({ months: 1 });
  const nextMonth = urlDate.plus({ months: 1 });
  return (
    <div className="container mx-auto space-y-8 px-4 py-8 md:space-y-10">
      <Hero
        title={`The best products of ${urlDate.startOf("month").toLocaleString({ year: "numeric", month: "long" })}`}
        description=""
        titleClassName="text-center"
      />
      <div className="flex items-center justify-center gap-2">
        {previousMonth.year >= 2000 && (
          <Button
            variant="secondary"
            nativeButton={false}
            render={(props) => (
              <Link
                {...props}
                to={`/products/leaderboards/monthly/${previousMonth.year}/${previousMonth.month}`}
              />
            )}
          >
            &larr;{" "}
            {previousMonth.toLocaleString({ year: "numeric", month: "long" })}
          </Button>
        )}
        {!loaderData.isCurrentMonth && nextMonth.year <= 2100 && (
          <Button
            variant="secondary"
            nativeButton={false}
            render={(props) => (
              <Link
                {...props}
                to={`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}
              />
            )}
          >
            {nextMonth.toLocaleString({ year: "numeric", month: "long" })}{" "}
            &rarr;
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
