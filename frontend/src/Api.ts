export const postDataWithJsonAsync = async <T>(path: string, data: T) => {
    await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: toJson(data),
    });
};

export const deleteDataWithJsonAsync = async <T>(path: string, data: T) => {
    await fetch(path, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: toJson(data),
    });
};

export const getDataWithJsonAsync = async <T>(
    path: string
): Promise<T | undefined> => {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            return undefined;
        }
        return JSON.parse(await response.text());
    } catch (err) {
        console.error("通信に失敗しました。", err);
        return undefined;
    }
};

const toJson = <T>(data: T) => {
    return JSON.stringify(data, function (key, value) {
        if (this[key] instanceof Date) {
            return new Date(this[key]).toLocaleString();
        }
        return value;
    });
};
