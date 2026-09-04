import type { Route } from "./+types/category-page";

export function loader({ params }: Route.LoaderArgs) {
  return { category: params.category };
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta({ params }: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [{ title: `${params.category} Products | wemake` }];
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">{loaderData.category} Products</h1></main>;
}
