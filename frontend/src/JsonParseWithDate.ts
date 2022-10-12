export const ParseWithDate = (json: string) => {
    const reviver = (key: any, val: any) => {
        if (
            typeof val == "string" &&
            val.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}Z?$/)
        ) {
            return new Date(Date.parse(val));
        }
        return val;
    };
    return JSON.parse(json, reviver);
};
