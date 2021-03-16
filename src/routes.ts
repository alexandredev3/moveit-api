import { Router } from 'express';

import { createThumbnailController } from './useCase';

const routes = Router();

routes.get('/thumbnail', createThumbnailController.create);

export {
  routes
}