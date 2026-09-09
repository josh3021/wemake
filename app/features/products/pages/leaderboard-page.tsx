import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/leaderboard-page";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";

export function meta(_args: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [
    { title: "Leaderboards | wemake" },
    { name: "description", content: "Explore the top community products." },
  ];
}

export default function LeaderboardPage() {
  return (
    <div className="space-y-20">
      <Hero
        variant="banner"
        title="Leaderboards"
        description="The most popular products on wemake"
      />
      <div className="grid grid-cols-3 gap-4">
        <Hero
          title="Daily LeaderBoard"
          titleClassName="text-2xl"
          description="The most popular products on wemake today."
          descriptionClassName="text-lg"
          linkText="Explore all products"
        />
        {Array.from({ length: 7 }).map((_, index) => (
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
        <Button variant="link" className={"text-lg self-center p-0"}>
          <Link to="/products/leaderboards/daily">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Hero
          title="Weekly LeaderBoard"
          titleClassName="text-2xl"
          description="The most popular products on wemake today."
          descriptionClassName="text-lg"
          linkText="Explore all products"
        />
        {Array.from({ length: 7 }).map((_, index) => (
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
        <Button variant="link" className={"text-lg self-center p-0"}>
          <Link to="/products/leaderboards/weekly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Hero
          title="Monthly LeaderBoard"
          titleClassName="text-2xl"
          description="The most popular products on wemake today."
          descriptionClassName="text-lg"
          linkText="Explore all products"
        />
        {Array.from({ length: 7 }).map((_, index) => (
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
        <Button variant="link" className={"text-lg self-center p-0"}>
          <Link to="/products/leaderboards/monthly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Hero
          title="Yearly LeaderBoard"
          titleClassName="text-2xl"
          description="The most popular products on wemake today."
          descriptionClassName="text-lg"
          linkText="Explore all products"
        />
        {Array.from({ length: 7 }).map((_, index) => (
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
        <Button variant="link" className={"text-lg self-center p-0"}>
          <Link to="/products/leaderboards/yearly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
}
