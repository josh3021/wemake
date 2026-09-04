import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  id: string;
  content: string;
  viewsCount: number;
  createdAt: string;
  likesCount: number;
  claimed?: boolean;
}

export function IdeaCard({
  id,
  content,
  viewsCount,
  createdAt,
  likesCount,
  claimed = false,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent transition-colors hover:bg-card/50">
      <CardHeader>
        <Link to={`/ideas/${id}`}>
          <CardTitle className="text-xl">
            <span
              className={cn(
                claimed
                  ? "bg-muted-foreground text-muted-foreground selection:bg-muted-foreground selection:text-muted-foreground"
                  : "",
              )}
            >
              {content}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <div className="flex items-center gap-1">
          <EyeIcon className="size-4" />
          <span>{viewsCount}</span>
        </div>
        <DotIcon className="size-4" />
        <span>{createdAt}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-1.5">
        <Button variant="outline">
          <HeartIcon className="size-4" />
          <span>{likesCount}</span>
        </Button>
        {claimed ? (
          <Button variant="outline" disabled className="cursor-not-allowed">
            <LockIcon className="size-4" />
            <span>Claimed</span>
          </Button>
        ) : (
          <Button
            nativeButton={false}
            render={(props) => <Link {...props} to={`/ideas/${id}/claim`} />}
          >
            Claim idea now &rarr;
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
