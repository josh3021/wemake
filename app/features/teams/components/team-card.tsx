import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { buttonVariants } from "~/common/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface TeamCardProps {
  id: string;
  leaderUsername: string;
  leaderAvatarUrl?: string;
  positions: string[];
  projectDescription: string;
}

export function TeamCard({
  id,
  leaderUsername,
  leaderAvatarUrl,
  positions,
  projectDescription,
}: TeamCardProps) {
  return (
    <Link to={`/teams/${id}`} className="block">
      <Card className="h-full bg-transparent transition-colors hover:bg-card/50">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge
              variant="secondary"
              className="inline-flex items-center text-base shadow-sm"
            >
              <span>@{leaderUsername}</span>
              <Avatar className="size-5">
                <AvatarImage
                  src={leaderAvatarUrl}
                  alt={`${leaderUsername}'s avatar`}
                />
                <AvatarFallback>
                  {leaderUsername.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Badge>
            <span> is looking for </span>
            {positions.map((position) => (
              <Badge key={position} className="mr-1 text-base">
                {position}
              </Badge>
            ))}
            <span> to build </span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <span className={buttonVariants({ variant: "link" })}>
            Join team &rarr;
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
