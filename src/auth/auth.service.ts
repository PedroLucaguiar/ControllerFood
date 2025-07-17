import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(cpf: string, pass: string) {
    const user = await this.usersService.findByCPF(cpf);
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }
    const passwordMatch = await bcrypt.compare(pass, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Senha inválida');
    }
    
    const { password, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { cpf: user.cpf, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
