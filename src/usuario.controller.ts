import { Controller, Post } from '@nestjs/common';

@Controller('/usuarios')
export class usuarioController {
  @Post()
  async criaUsuario() {
    return { status: 'usuario criado!' };
  }
}
