import { Link, type MetaFunction } from "react-router";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { ProductCard } from "~/features/products/components/product-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Button } from "../components/ui/button";
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

export default function HomePage({ hello }: Route.ComponentProps) {
  console.log(hello);
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" className="text-destructive text-xl p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
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
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions on our community.
          </p>
          <Button variant="link" className="text-destructive text-xl p-0">
            <Link to="/products/leaderboards">
              Explore all discussions &rarr;
            </Link>
          </Button>
        </div>
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
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" className="text-destructive text-xl p-0">
            <Link to="/ideas">Explore all discussions &rarr;</Link>
          </Button>
        </div>
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
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your next job.
          </p>
          <Button variant="link" className="text-destructive text-xl p-0">
            <Link to="/ideas">Explore all jobs &rarr;</Link>
          </Button>
        </div>
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
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant="link" className="text-destructive text-xl p-0">
            <Link to="/ideas">Explore all teams &rarr;</Link>
          </Button>
        </div>
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
