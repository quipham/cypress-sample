import { faker } from '@faker-js/faker';

export function getRandomRecentDate() {
    return faker.date.recent();
}

export function getRandomFutureDate() {
    return faker.date.future();
}

export function getRandomName($) {
    return faker.name.firstName();
}