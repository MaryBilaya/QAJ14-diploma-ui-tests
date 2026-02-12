export function randomEmail(emailName: string) {
    const randomPart = Math.floor(Math.random() * 100);
    return `${emailName}+${randomPart}@mail.ru`
}
