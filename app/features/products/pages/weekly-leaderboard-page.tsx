import type { Route } from "./+types/weekly-leaderboard-page";

export function loader({ params }: Route.LoaderArgs) {
  return { year: params.year, week: params.week };
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta({ params }: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [{ title: `${params.year} Week ${params.week} Product Leaderboard | wemake` }];
}

export default function WeeklyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">{loaderData.year} Week {loaderData.week} Product Leaderboard</h1></main>;
}
