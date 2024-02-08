import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 5;
const reviewsCount = 10;

for (let i = 0; i < productsCount; i++) {
	const name = faker.commerce.productName();

	const createdProduct = await prisma.product.create({
		data: {
			name: name,
			slug: faker.helpers.slugify(name).toLowerCase(),
			description: faker.commerce.productDescription(),
			price: Number(faker.commerce.price()) * 100,
		},
	});
	console.log(`Created product with id: ${createdProduct.id}`);

	for (let j = 0; j < reviewsCount; j++) {
		const createReview = await prisma.review.create({
			data: {
				title: faker.lorem.sentence(),
				description: faker.lorem.paragraph(),
				rating: faker.number.int({ min: 1, max: 5 }),
				product: {
					connect: {
						id: createdProduct.id,
					},
				},
			},
		});
		console.log(`Created review with id: ${createReview.id}`);
	}
}
