export class Helper {
  static formatUserData() {}
  static tagged(text) {
    text = text.toLowerCase();
    text = text.trim();
    text = text.replace(/\s/g, "-");
    return text;
  }
}
