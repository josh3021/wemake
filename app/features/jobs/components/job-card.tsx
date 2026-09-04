import { Link } from "react-router";
import { Badge } from "~/common/components/ui/badge";
import { buttonVariants } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { cn } from "~/lib/utils";

interface JobCardProps {
  id: string;
  companyName: string;
  companyLogoUrl: string;
  title: string;
  createdAt: string;
  tags: string[];
  salary: string;
  location: string;
}

export function JobCard({
  id,
  companyName,
  companyLogoUrl,
  title,
  createdAt,
  tags,
  salary,
  location,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`} className="block">
      <Card className="h-full bg-transparent transition-colors hover:bg-card/50">
        <CardHeader>
          <div className="mb-8 flex items-center gap-4">
            <img
              src={companyLogoUrl}
              alt={`${companyName} logo`}
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{companyName}</span>
              <span className="text-xs text-muted-foreground">{createdAt}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <div className="flex min-w-0 flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salary}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {location}
            </span>
          </div>
          <span
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "shrink-0",
            )}
          >
            Apply now
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
