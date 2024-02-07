export default interface UserBase {
  name: string;
  last_name: string;
  password: string;
  email: string;
  user_id: string;
  create_time?: Date;
}

export interface UserLogin extends Pick<UserBase, 'email' | 'password'> {}
export interface UserLogged extends Pick<UserBase, 'email' | 'user_id'> {
  id: number;
}
