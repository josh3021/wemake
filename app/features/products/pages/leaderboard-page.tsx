import type { Route } from "./+types/leaderboard-page";

export function loader(_args: Route.LoaderArgs) {
  return {};
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta(_args: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [
    { title: "Product Leaderboards | wemake" },
    { name: "description", content: "Explore the top community products." },
  ];
}

export default function LeaderboardPage(_props: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">Product Leaderboards</h1></main>;
}
