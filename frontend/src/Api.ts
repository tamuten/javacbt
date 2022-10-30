import { formatDateTime } from "./formatDateTime";

export const postDataWithJsonAsync = async <T>(path: string, data: T) => {
    const requestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: toJson(data),
    };
    const response = await fetch(path, requestInit);
    if (!response.ok) {
        console.error("通信に失敗しました。", await response.text());
        return response.statusText;
    }
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
        return jsonParseWithDate(await response.text());
    } catch (err) {
        console.error("通信に失敗しました。", err);
        return undefined;
    }
};

const toJson = <T>(data: T) => {
    return JSON.stringify(data, function (key, value) {
        if (this[key] instanceof Date) {
            return formatDateTime(this[key], "/");
        }
        return value;
    });
};

const jsonParseWithDate = (json: string) => {
    const reviver = (key: any, val: any) => {
        if (
            typeof val == "string" &&
            val.match(/^\d{4}\/\d{2}\/\d{2}\s\d{2}:?\d{0,2}:\d{2}\.?\d{0,3}Z?$/)
        ) {
            return new Date(val);
        }
        return val;
    };
    return JSON.parse(json, reviver);
};
