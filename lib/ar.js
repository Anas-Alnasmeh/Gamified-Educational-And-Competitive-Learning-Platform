// Converts Western digits to Arabic-Indic digits: 120 -> ١٢٠
export const toAr = (n) => String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
