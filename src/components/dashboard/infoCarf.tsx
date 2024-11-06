"sue client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfosCardProps } from "@/types/dashboard.types";
import { CircleCheck } from "lucide-react";

const InfoCard = ({ count, title, description, Icon }: InfosCardProps) => {
  return (
    <Card className="group hover:text-secondary hover:bg-primary transition-all duration-300 ease-in-out  w-full h-fit">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-12 items-center">
        <p className="font-extrabold text-6xl">{count}</p>
        <Icon
          size={70}
          className="text-primary group-hover:text-secondary transition-all duration-300 ease-in-out"
        />
      </CardContent>
    </Card>
  );
};

export default InfoCard;
