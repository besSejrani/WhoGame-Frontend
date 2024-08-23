export default async function promiseResolver<T>(
  promise: () => Promise<T>
): Promise<[T | null, Error | null]> {
  try {
    const data = await promise();
    return [data, null];
  } catch (err) {
    return [null, err as Error];
  }
}
