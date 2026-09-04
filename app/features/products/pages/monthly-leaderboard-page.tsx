import type { Route } from "./+types/monthly-leaderboard-page";

export function loader({ params }: Route.LoaderArgs) {
  return { year: params.year, month: params.month };
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta({ params }: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [{ title: `${params.year}-${params.month} Product Leaderboard | wemake` }];
}

export default function MonthlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">{loaderData.year}-{loaderData.month} Product Leaderboard</h1></main>;
}
