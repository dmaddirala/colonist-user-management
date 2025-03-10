import { User } from "./User";

export interface UserListProps {
  users: User[];
  loading: boolean;
  loadMoreUsers: () => void;
}