import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly auhthService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data = this.auhthService.checkToken(
        (authorization ?? '').split(' ')[1],
      );

      const userId = data.sub;

      const user = await this.userService.show(userId);

      request.user = user;

      return true;
    } catch (e) {
      return false;
    }
  }
}
