import { SortOrder } from '@/constants/SortOrder';
import { User } from '@/interfaces/User';
import { useState, useEffect, useCallback } from "react";

export const usePaginatedUsers = (
  initialPage = 1,
  pageSize = 20,
  initialOrder = SortOrder.Ascending,
  initialCountry = "All"
) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(initialPage);
  const [order, setOrder] = useState<SortOrder>(initialOrder);
  const [countryFilter, setCountryFilter] = useState<string>(initialCountry);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchUsers = useCallback(
    async (pageNumber: number) => {
      if (loading) return;

      setLoading(true);
      try {
        let apiUrl = `https://6799ee3d747b09cdcccd06bc.mockapi.io/api/v1/users?page=${pageNumber}&limit=${pageSize}&sortBy=createdAt&order=${order}`;

        if (countryFilter !== "All") {
          apiUrl += `&country=${countryFilter}`;
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const newUsers: User[] = await response.json();
        setUsers((prevUsers) => {
          const existingUserIds = new Set(prevUsers.map(user => user.id));
          const uniqueNewUsers = newUsers.filter(user => !existingUserIds.has(user.id));
          return [...prevUsers, ...uniqueNewUsers];
        });
        setHasMore(newUsers.length > 0);
      } finally {
        setLoading(false);
      }
    },
    [order, countryFilter, hasMore, loading]
  );

  useEffect(() => {
    setUsers([]);
    setHasMore(true);
    fetchUsers(1);
  }, [order, countryFilter]);

  const loadMoreUsers = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        fetchUsers(nextPage);
        return nextPage;
      });
    }
  };

  return {
    users,
    loading,
    loadMoreUsers,
    order,
    setOrder,
    countryFilter,
    setCountryFilter,
  };
};
