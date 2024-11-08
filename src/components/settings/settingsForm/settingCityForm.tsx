"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cityShcema } from "@/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useMemo, useState, useTransition } from "react";
import { city, FormValue } from "@/types/settings.types";
import { FixedSizeList as List } from "react-window";
import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "@/lib/fetchData";
import useDebounce from "@/hooks/useDebounce";
import {
  loadSettingsFromLocalStorage,
  saveSettingsToLocalStorage,
} from "@/lib/localStorage";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { settingSliceAction } from "@/store/setting-slice";
const SettingCityForm: React.FC<FormValue> = ({value}) => {
  const [search, setSearch] = useState<string | undefined>();
  const debouncedSearch = useDebounce(search);
  const t = useTranslations("settings");
  const [isPendingTransition, startTransition] = useTransition();
  const dispatch = useAppDispatch()
  const {
    isPending,
    isError,
    data: citiesData,
  } = useQuery({
    queryKey: ["city"],
    queryFn: fetchCities,
  });
  const handleSearch = (selectedCity: string): city | null => {
    return (
      citiesData?.find(
        (city: city) => city.city.toLowerCase() === selectedCity.toLowerCase()
      ) || null
    );
  };
  const filteredCities = useMemo(() => {
    if (!citiesData || !debouncedSearch) return citiesData;
    return citiesData.filter((city: city) =>
      city.city.toLowerCase().startsWith(debouncedSearch.toLowerCase())
    );
  }, [citiesData, debouncedSearch]);
  const currentCity = useAppSelector(state => state.settings.city?.city)
  const form = useForm<z.infer<typeof cityShcema>>({
    resolver: zodResolver(cityShcema),
    defaultValues: {
      city: currentCity ? currentCity : undefined,
    },
  });
  function onSubmit(values: z.infer<typeof cityShcema>) {
    startTransition(() => {
      const city = handleSearch(values.city);
      if (city) {
        saveSettingsToLocalStorage("city", city);
      }
      dispatch(settingSliceAction.getCity())
      toast.success(t("save"), {
        className: "bg-green-100",
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>{t("city")}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? field.value : t("enterCity")}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <div>
                    <Input
                      type="text"
                      placeholder={t("enterCity")}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    {filteredCities && filteredCities.length > 0 ? (
                      <List
                        height={200}
                        itemCount={filteredCities.length}
                        itemSize={35}
                        width="100%"
                      >
                        {({ index, style }) => {
                          const city = filteredCities[index];
                          return (
                            <div
                              className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-200"
                              key={city.city}
                              style={style} // Apply the style prop here for positioning
                              onClick={() => {
                                form.setValue("city", city.city);
                              }}
                            >
                              {city.city}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  city.city === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </div>
                          );
                        }}
                      </List>
                    ) : (
                      <div className="p-2">{t("notFound")}</div>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPendingTransition || isPending}>
          {t("submit")}
          {isPendingTransition ||
            (isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />)}
        </Button>
      </form>
    </Form>
  );
};

export default SettingCityForm;
