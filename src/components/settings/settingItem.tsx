"use client";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";

const SettingItem = ({
  value,
  plceholder,
  label,
  children,
}: {
  value: string | undefined;
  plceholder: string;
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex w-full space-y-2 flex-col items-start">
      <Label className="w-fit" htmlFor="input">
        {label}
      </Label>
      <div className="flex gap-5">
        <Input
          type="email"
          id="input"
          placeholder={plceholder}
          disabled
          value={value}
        />
        {children}
      </div>
    </div>
  );
};

export default SettingItem;
