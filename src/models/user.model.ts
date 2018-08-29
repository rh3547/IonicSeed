export class UserModel {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public roles: any
  ) {}
}
