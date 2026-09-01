import { Link } from "react-router";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  BarChart3Icon,
  BellIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

const menus: {
  name: string;
  to: string;
  items?: { name: string; to: string; description: string }[];
}[] = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        to: "/products/leaderboards",
        description: "See the top performers in your community",
      },
      {
        name: "Categories",
        to: "/products/categories",
        description: "See the top categories in your community",
      },
      {
        name: "Search",
        to: "/products/search",
        description: "Search for products",
      },
      {
        name: "Submit a Product",
        to: "/products/submit",
        description: "Submit a product to our community",
      },
      {
        name: "Promote",
        to: "/products/promote",
        description: "Promote your product to our community",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        to: "/jobs?type=remote",
        description: "Find a remote jobs in our community",
      },
      {
        name: "Full-Time Jobs",
        to: "/jobs?type=full-time",
        description: "Find a full-time job in our community",
      },
      {
        name: "Freelance Jobs",
        to: "/jobs?type=freelance",
        description: "Find a freelance job in our community",
      },
      {
        name: "Interships",
        to: "/jobs?type=internship",
        description: "Find an internship in our community",
      },
      {
        name: "Submit a Job",
        to: "/jobs/submit",
        description: "Submit a job to our community",
      },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        to: "/community",
        description: "View all posts in our community",
      },
      {
        name: "Top Posts",
        to: "/community?sort=top",
        description: "View the top posts in our community",
      },
      {
        name: "New Posts",
        to: "/community?sort=new",
        description: "View the newest posts in our community",
      },
      {
        name: "Create a Post",
        to: "/community/new",
        description: "Create a new post in our community",
      },
    ],
  },
  {
    name: "IdeasGPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        to: "/teams",
        description: "View all teams in our organization",
      },
      {
        name: "Create a Team",
        to: "/teams/new",
        description: "Create a new team in our organization",
      },
    ],
  },
];

export default function Navigation({
  isLoggedIn,
  hasNotifications,
  hasMessages,
}: {
  isLoggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}) {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          wemake
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <NavigationMenuTrigger>
                      <Link
                        to={menu.to}
                        className={cn(navigationMenuTriggerStyle())}
                      >
                        {menu.name}
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-125 font-light gap-3 p-4 grid-cols-2">
                        {menu.items.map((item) => (
                          <ListItem
                            key={item.name}
                            name={item.name}
                            to={item.to}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link to={menu.to} className={navigationMenuTriggerStyle()}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isLoggedIn ? (
        <div className="flex items-center gap-1">
          <Button size="icon" variant={"ghost"} className={"relative"}>
            <Link to="/my/notifications">
              <BellIcon className="size-4" />
              {hasNotifications && (
                <span className="absolute top-0 right-0 bg-red-500 size-2 rounded-full"></span>
              )}
            </Link>
          </Button>
          <Button size="icon" variant={"ghost"} className={"relative"}>
            <Link to="/my/messages">
              <MessageCircleIcon className="size-4" />
              {hasMessages && (
                <span className="absolute top-0 right-0 bg-red-500 size-2 rounded-full"></span>
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/josh3021.png" />
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="flex flex-col">
                  <span className="font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">
                    @johndoe
                  </span>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  render={
                    <Link to="/my/dashboard">
                      <BarChart3Icon className="size-4 mr-1" /> Dashboard
                    </Link>
                  }
                  className="cursor-pointer"
                />
                <DropdownMenuItem
                  render={
                    <Link to="/my/profile">
                      <UserIcon className="size-4 mr-1" /> Profile
                    </Link>
                  }
                  className="cursor-pointer"
                />
                <DropdownMenuItem
                  render={
                    <Link to="/my/settings">
                      <SettingsIcon className="size-4 mr-1" /> Settings
                    </Link>
                  }
                  className="cursor-pointer"
                />
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  render={
                    <Link to="/auth/logout">
                      <LogOutIcon className="size-4 mr-1" /> Logout
                    </Link>
                  }
                  className="cursor-pointer"
                />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={(props) => <Link {...props} to="/auth/login" />}
            variant="secondary"
          >
            Login
          </Button>
          <Button
            nativeButton={false}
            render={(props) => <Link {...props} to="/auth/join" />}
          >
            Join
          </Button>
        </div>
      )}
    </nav>
  );
}

function ListItem({
  name,
  children,
  to,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { name: string; to: string }) {
  return (
    <li
      {...props}
      className={cn([
        "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
        to === "/products/promote" &&
          "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
        to === "/jobs/submit" &&
          "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
      ])}
    >
      <NavigationMenuLink
        key={name}
        render={(linkProps) => (
          <Link
            {...linkProps}
            to={to}
            className={cn(
              linkProps.className,
              "p-3 space-y-1 block leading-none no-underline outline-none",
            )}
          >
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{name}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        )}
      />
    </li>
  );
}
