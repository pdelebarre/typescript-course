class MyClass {
  readonly id: number = 123456;

  constructor(
    readonly name: string,
    private dob: string,
    private _score: number = 0
  ) {}

  getDob(): string {
    return this.dob;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this._score = newScore;
  }
}

const philippe: MyClass = new MyClass("Philippe", "09/09/1974");

console.log("dob", philippe.getDob());
philippe.score = -100;
