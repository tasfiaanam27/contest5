function swapKeysAndValues(obj: Record<string, string | number>): Record<string, string> {
    const result: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
        result[String(value)] = key;
    }

    return result;
}