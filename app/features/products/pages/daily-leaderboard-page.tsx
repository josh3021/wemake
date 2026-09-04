import type { Route } from "./+types/daily-leaderboard-page";

export function loader({ params }: Route.LoaderArgs) {
  return { year: params.year, month: params.month, day: params.day };
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta({ params }: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [{ title: `${params.year}-${params.month}-${params.day} Product Leaderboard | wemake` }];
}

export default function DailyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">{loaderData.year}-{loaderData.month}-{loaderData.day} Product Leaderboard</h1></main>;
}
