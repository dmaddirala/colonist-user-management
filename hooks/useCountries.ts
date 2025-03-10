import { Country } from "@/interfaces/Country";
import { CountryApiResponse } from "@/interfaces/CountryApiResponse";
import { useState, useEffect } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      try {
        if (countries.length > 0) return;

        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2");

        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data: CountryApiResponse[] = await response.json();

        const countryList: Country[] = data
          .map((item) => ({
            code: item.cca2,
            name: item.name.common,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries([{ code: "All", name: "All Countries" }, ...countryList]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};
