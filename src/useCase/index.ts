import { CreateThumbnailController } from './createThumbnail/CreateThumbnailController';
import { CreateThumbnailUseCase } from './createThumbnail/CreateThumbnailUseCase';

import { ThumbnailProvider } from '../providers/implementations/ThumbnailProvider';
import { ChromiumProvider } from '../providers/implementations/ChromiumProvider';

const chromiumProvider = new ChromiumProvider();
const thumbnailProvider = new ThumbnailProvider();

const createThumbnailUseCase = new CreateThumbnailUseCase(
  thumbnailProvider,
  chromiumProvider,
);
const createThumbnailController = new CreateThumbnailController(createThumbnailUseCase);

export {
  createThumbnailController,
}