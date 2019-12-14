export class LoggingService {
  logStatusChange(status: string) {
    console.log("A service status change, new status: " + status);
  }
}
