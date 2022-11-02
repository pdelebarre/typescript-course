export function add(x: number, y: number): number {
  return x + y;
}

export function sample<T>(arr: T[]): T {
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
