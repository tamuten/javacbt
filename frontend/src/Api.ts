export const postDataWithJsonAsync = async <T>(path: string, data: T) => {
    await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: toJson(data),
    });
};

export const getDataWithJsonAsync = async <T>(
    path: string
): Promise<T | null> => {
    const json = await fetch(path).then(
        (response) => response.text(),
        (reason) => {
            console.error(reason);
        }
    );

    if (json) return JSON.parse(json);
    return null;
};

const toJson = <T>(data: T) => {
    return JSON.stringify(data, function (key, value) {
        if (this[key] instanceof Date) {
            return new Date(this[key]).toLocaleString();
        }
        return value;
    });
};
