export class LocalStorageError extends Error {
  constructor(message: string) {
    super();
    this.name = "LocalStorageError";
    this.message = message;
  }
}