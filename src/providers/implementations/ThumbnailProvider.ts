import handlebars from 'handlebars';
import fs from 'fs';
import { join } from 'path';

export class ThumbnailProvider {
  public getThumbnailHtml(
    level: number, 
    challengesCompleted: number, 
    currentExperience: number
  ) {
    const path = join(__dirname, '..', '..', 'views', 'thumbnails', 'levelup-thumbnail.hbs')

    const templateFileContent = fs.readFileSync(path).toString('utf-8');
    const mailTemplateParse = handlebars.compile(templateFileContent);
    const html = mailTemplateParse({
      level,
      challengesCompleted,
      currentExperience,
    });

    return html;
  }
}