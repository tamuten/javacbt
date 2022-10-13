export const postDataWithJsonAsync = async <T>(path: string, data: T) => {
    await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: toJson(data),
    });
};

const toJson = <T>(data: T) => {
    return JSON.stringify(data, function (key, value) {
        if (this[key] instanceof Date) {
            return new Date(this[key]).toLocaleString();
        }
        return value;
    });
};
