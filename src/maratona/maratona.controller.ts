import {Controller, Get, Post, Req, Request, Param} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Maratona} from "./maratona.model";
import { AppService } from '../app.service';

@Controller('maratona')// aqui eu defino a rota raiz /teste
export class MaratonaController {
  constructor(
    @InjectRepository(Maratona)
    private readonly maratonaRepo: Repository<Maratona>,
) {

}

  @Get()// aqui defino a rota apos a raiz /teste/hello
  async index() {
    return await this.maratonaRepo.find({  }) // lista todas as aulas da maratona
  }

  @Post()
    async store(@Req() request: Request) {
        const maratona = this.maratonaRepo.create(request.body as any); // insere aulas na maratona
        await this.maratonaRepo.save(maratona);
        return maratona;
    }
}
