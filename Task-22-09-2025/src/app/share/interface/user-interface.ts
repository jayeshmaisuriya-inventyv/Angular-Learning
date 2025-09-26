export interface UserInterface {
  id: number;
  name: string;
  email: string;
  profileImage?: string;
  bio?: string;
  planName?: string;
  customMessage?: string;
  subscription?: 'Basic' | 'Premium';
}
