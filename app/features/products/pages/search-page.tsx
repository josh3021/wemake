import type { Route } from "./+types/search-page";

export function loader(_args: Route.LoaderArgs) {
  return {};
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta(_args: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [
    { title: "Search Products | wemake" },
    { name: "description", content: "Search community products." },
  ];
}

export default function SearchPage(_props: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">Search Products</h1></main>;
}
