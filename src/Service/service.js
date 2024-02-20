export function getAppartments() {
    return fetch("./Assets/test.json").then((response) => response.json());
}
