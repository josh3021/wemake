import { Link } from "react-router";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  commentsCount: number;
  viewsCount: number;
  votesCount: number;
}

export function ProductCard({
  id,
  name,
  description,
  commentsCount,
  viewsCount,
  votesCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="block w-full">
      <Card className="w-full flex flex-row items-center justify-between bg-transparent hover:bg-card/50">
        <CardHeader className="min-w-0 flex-1">
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
            {name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MessageCircleIcon className="size-4" />
              <span>{commentsCount}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <EyeIcon className="size-4" />
              <span>{viewsCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button
            variant="outline"
            className="flex flex-col items-center cursor-pointer h-14"
          >
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{votesCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
