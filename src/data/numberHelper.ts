export const numberSeperator = (price: number): string => {
    if (!price) return '';
    return price.toLocaleString('fa-IR');
};  