export const formatDateTimeHyphen = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return (
        ("0000" + year).slice(-4) +
        "-" +
        ("00" + month).slice(-2) +
        "-" +
        ("00" + day).slice(-2) +
        " " +
        ("00" + hour).slice(-2) +
        ":" +
        ("00" + minute).slice(-2)
    );
};
