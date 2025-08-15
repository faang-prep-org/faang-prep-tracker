export class IdGenerator {
    generate() {
        return crypto.randomUUID();
    }
}