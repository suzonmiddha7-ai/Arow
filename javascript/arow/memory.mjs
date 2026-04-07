export class LocalMemory {
  constructor(key) {
    this.key = key;
    this.data = this.load();
  }

  save(value) {
    this.data = value;
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  load() {
    const stored = localStorage.getItem(this.key);
    return stored ? JSON.parse(stored) : "";
  }
}