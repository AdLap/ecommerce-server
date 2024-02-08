import type { QueryResolvers } from "./../../../types.generated";
export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	_arg,
	ctx,
) => {
	const products = ctx.prisma.product.findMany();

	return (await products).map((product) => ({
		...product,
		reviews: [],
		images: [],
	}));
};
