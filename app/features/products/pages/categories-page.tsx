import type { Route } from "./+types/categories-page";

export function loader(_args: Route.LoaderArgs) {
  return {};
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta(_args: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [
    { title: "Product Categories | wemake" },
    { name: "description", content: "Browse products by category." },
  ];
}

export default function CategoriesPage(_props: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">Product Categories</h1></main>;
}
