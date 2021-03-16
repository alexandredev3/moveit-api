export interface IThumbnailProvider {
  getThumbnailHtml: (level: number, challengesCompleted: number, currentExperience: number) => string;
}