import { UserSchema } from '../../schemas/User';
import { ChallengesSchema } from '../../schemas/Challenges';

import { IChromiumProvider } from '../../providers/IChromiumProvider';
import { IThumbnailProvider } from '../../providers/IThumbnailProvider';

export class CreateThumbnailUseCase {
  constructor(
    private thumbnailProvider: IThumbnailProvider,
    private chromium: IChromiumProvider,
  ) {}

  public async execute(id: string) {
    const user = await UserSchema.findOne({
      _id: id
    });

    if (!user) {
      throw new Error('User does not exists.');
    }

    // const challenge = await ChallengesSchema.find()

    const html = this.thumbnailProvider.getThumbnailHtml(3, 4, 20);

    const thumbnail = await this.chromium.getScreenshot(html);

    return thumbnail;
  }
}