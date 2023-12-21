export function isValidDate(dateString:string) {
    if(!dateString || dateString.length < 5 ) return true
    const [month, day] = dateString.split('/');
    const numericMonth = parseInt(month, 10);
    const numericDay = parseInt(day, 10);
    return !(numericMonth < 1 || numericMonth > 12 || numericDay < 1 || numericDay > 31);
}