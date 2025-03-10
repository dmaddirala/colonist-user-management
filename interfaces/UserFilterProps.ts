import { SortOrder } from "@/constants/SortOrder";

export interface UserFilterProps {
  countryFilter: string;
  setCountryFilter: (value: string) => void;
  order: SortOrder;
  setOrder: (value: SortOrder) => void;
  countries: { name: string; code: string }[];
  loadingCountries: boolean;
}