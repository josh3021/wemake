import type { Route } from "./+types/submit-page";

export function loader(_args: Route.LoaderArgs) {
  return {};
}

export function action(_args: Route.ActionArgs) {
  return {};
}

export function meta(_args: Route.MetaArgs): ReturnType<Route.MetaFunction> {
  return [
    { title: "Submit a Product | wemake" },
    { name: "description", content: "Submit your product to the community." },
  ];
}

export default function SubmitPage(_props: Route.ComponentProps) {
  return <main className="px-20"><h1 className="text-4xl font-bold">Submit a Product</h1></main>;
}
