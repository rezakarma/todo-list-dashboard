import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SettingItemSheetProps } from "@/types/settings.types";

const SettingItemSheet: React.FC<SettingItemSheetProps> = ({
  ItemForm,
  children,
  value,
  title,
  description,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
       
        {children}
       
        </SheetTrigger>
      <SheetContent className="w-[400px] rounded-2xl sm:w-[540px] h-11/12 m-10">
        <SheetHeader className="mb-4 mr-5 text-right">
          <SheetTitle className="text-right">
            {title}
          </SheetTitle>
          <SheetDescription className="text-right">
            {description}
          </SheetDescription>
        </SheetHeader>
        <ItemForm value={value} />
      </SheetContent>
    </Sheet>
  );
};

export default SettingItemSheet;
