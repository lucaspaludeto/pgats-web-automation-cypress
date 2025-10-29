import { faker } from '@faker-js/faker';

export const generateUser = () => {
    const futureDate = faker.date.future({ years: 5 });
    
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        company: faker.company.name(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        mobileNumber: faker.phone.number(),
        cardNumber: faker.finance.creditCardNumber(),
        cvc: faker.finance.creditCardCVV(),
        expMonth: String(futureDate.getMonth() + 1).padStart(2, '0'),
        expYear: String(futureDate.getFullYear())
    }
}