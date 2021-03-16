import { Request, Response } from 'express';

import { CreateThumbnailUseCase } from './CreateThumbnailUseCase';

export class CreateThumbnailController {
  constructor(
    private createThumbnailUseCase: CreateThumbnailUseCase,
  ) {}

  public create = async (request: Request, response: Response) => {
    const { id } = request.query;

    try {
      const thumbnail = await this.createThumbnailUseCase.execute(String(id));
  
      response.setHeader('Content-Type', 'image/png');
  
      response.end(thumbnail);
    } catch(err) {
      console.log(err)

      return response.status(500).send('Internal Server Error')
    }
  }
}