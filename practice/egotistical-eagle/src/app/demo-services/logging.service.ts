export class LoggingService {
  logMoodChange(mood: string) {
    console.log(`Mood has changed, new mood: ${mood}`);
  }
}