import type { Route } from "./+types/yearly-leaderboard-page";

export function loader({ params }: Route.LoaderArgs) {
  return { year: params.year };
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta({ params }: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [{ title: `${params.year} Product Leaderboard | wemake` }];
}

export default function YearlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">{loaderData.year} Product Leaderboard</h1></main>;
}
