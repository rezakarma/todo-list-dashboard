"use client";
type SettingItemWrapperProps = {
  children: React.ReactNode;
  label: string;
};
const SettingItemWrapper = ({ children, label }: SettingItemWrapperProps) => {
  return (
    <div className="flex w-full space-y-2 flex-col items-start">
      <span className="w-fit font-medium text-sm">{label}</span>
      <div className="flex gap-5">{children}</div>
    </div>
  );
};

export default SettingItemWrapper;
