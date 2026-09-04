import { DotIcon } from "lucide-react";
import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface PostCardProps {
  id: string;
  title: string;
  authorName: string;
  categoryName: string;
  createdAt: string;
  avatarUrl?: string;
  avatarFallback: string;
}

export function PostCard({
  id,
  title,
  authorName,
  categoryName,
  createdAt,
  avatarUrl,
  avatarFallback,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`} className="block">
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarImage src={avatarUrl} alt={authorName} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 space-y-1.5">
            <CardTitle>{title}</CardTitle>
            <div className="flex flex-wrap gap-2 text-sm leading-tight text-muted-foreground">
              <span>{authorName} on</span>
              <span>{categoryName}</span>
              <DotIcon className="size-4" />
              <span>{createdAt}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <span className="text-sm font-medium text-primary underline-offset-4 group-hover/card:underline">
            Reply &rarr;
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
