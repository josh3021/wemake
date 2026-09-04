import type { Route } from "./+types/promote-page";

export function loader(_args: Route.LoaderArgs) {
  return {};
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta(_args: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [
    { title: "Promote a Product | wemake" },
    { name: "description", content: "Promote your product to the community." },
  ];
}

export default function PromotePage(_props: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">Promote a Product</h1></main>;
}
