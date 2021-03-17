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
    const user = await UserSchema.findById(id);

    if (!user) {
      throw new Error('User does not exists.');
    }

    const challenge = await ChallengesSchema.findOne({
      'user.id': id
    })
    const { level, currentExperience, challengesCompleted } = challenge;

    const html = this.thumbnailProvider.getThumbnailHtml(level, challengesCompleted, currentExperience);

    const thumbnail = await this.chromium.getScreenshot(html);

    return thumbnail;
  }
}