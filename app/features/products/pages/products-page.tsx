import type { Route } from "./+types/products-page";

export function loader(_args: Route.LoaderArgs) {
  return {};
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta(_args: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [
    { title: "Products | wemake" },
    { name: "description", content: "Discover products from the community." },
  ];
}

export default function ProductsPage(_props: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">Products</h1></main>;
}
