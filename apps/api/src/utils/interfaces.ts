export interface User {
  name: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}
