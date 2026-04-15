let value:unknown = 20;

if (typeof value === "number") {
    value = value + 100;
}
if (typeof value === "string") {
    value = value.charAt(0).toUpperCase() + value.slice(1);
}
else if (typeof value === "boolean") {
    value = !value;
}
console.log(value);