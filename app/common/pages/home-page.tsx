import type { MetaFunction } from "react-router";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { ProductCard } from "~/features/products/components/product-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Hero } from "../components/hero";
import type { Route } from "./+types/home-page";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export const loader = () => {
  return {
    hello: "world",
  };
};

export default function HomePage(_props: Route.ComponentProps) {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <Hero
          title="Today's Products"
          description="The best products made by our community today."
          linkText="Explore all products"
          linkTo="/products/leaderboards"
        />
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            key={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Hero
          title="Latest Discussions"
          description="The latest discussions on our community."
          linkText="Explore all discussions"
          linkTo="/community"
        />
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            key={`postId-${index}`}
            id={`postId-${index}`}
            title="Discussion Title"
            authorName="Nico"
            categoryName="Productivity"
            createdAt="12 hours ago"
            avatarUrl="https://github.com/apple.png"
            avatarFallback="N"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Hero
          title="IdeasGPT"
          description="Find ideas for your next project."
          linkText="Explore all ideas"
          linkTo="/ideas"
        />
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            key={`ideaId-${index}`}
            id={`ideaId-${index}`}
            content="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            viewsCount={123}
            createdAt="12 hours ago"
            likesCount={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Hero
          title="Latest Jobs"
          description="Find your next job."
          linkText="Explore all jobs"
          linkTo="/jobs"
        />
        <JobCard
          id="jobId"
          companyName="Meta"
          companyLogoUrl="https://github.com/facebook.png"
          title="Software Engineer"
          createdAt="12 hours ago"
          tags={["Full-time", "Remote"]}
          salary="$100,000 - $120,000"
          location="San Francisco, CA"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Hero
          title="Find a team mate"
          description="Join a team looking for a new member."
          linkText="Explore all teams"
          linkTo="/teams"
        />
        <TeamCard
          id="teamId"
          leaderUsername="nico"
          leaderAvatarUrl="https://github.com/josh3021.png"
          positions={["Designer", "Developer"]}
          projectDescription="an AI-powered productivity platform."
        />
      </div>
    </div>
  );
}
