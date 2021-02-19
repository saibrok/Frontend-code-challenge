export default function(date) {
    return new Date(date).toLocaleString().slice(0, -3);
}
