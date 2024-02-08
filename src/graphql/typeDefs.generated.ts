import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 22, end: 29 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 30, end: 32 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 34, end: 36 },
									},
									loc: { start: 34, end: 36 },
								},
								loc: { start: 34, end: 37 },
							},
							directives: [],
							loc: { start: 30, end: 37 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 40, end: 47 },
						},
						loc: { start: 40, end: 47 },
					},
					directives: [],
					loc: { start: 22, end: 47 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 50, end: 58 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 61, end: 68 },
									},
									loc: { start: 61, end: 68 },
								},
								loc: { start: 61, end: 69 },
							},
							loc: { start: 60, end: 70 },
						},
						loc: { start: 60, end: 71 },
					},
					directives: [],
					loc: { start: 50, end: 71 },
				},
			],
			loc: { start: 0, end: 73 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Image", loc: { start: 80, end: 85 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 90, end: 93 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 95, end: 101 },
							},
							loc: { start: 95, end: 101 },
						},
						loc: { start: 95, end: 102 },
					},
					directives: [],
					loc: { start: 90, end: 102 },
				},
			],
			loc: { start: 75, end: 104 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 111, end: 118 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 123, end: 125 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 127, end: 129 },
							},
							loc: { start: 127, end: 129 },
						},
						loc: { start: 127, end: 130 },
					},
					directives: [],
					loc: { start: 123, end: 130 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 133, end: 137 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 139, end: 145 },
							},
							loc: { start: 139, end: 145 },
						},
						loc: { start: 139, end: 146 },
					},
					directives: [],
					loc: { start: 133, end: 146 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 149, end: 153 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 155, end: 161 },
							},
							loc: { start: 155, end: 161 },
						},
						loc: { start: 155, end: 162 },
					},
					directives: [],
					loc: { start: 149, end: 162 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 165, end: 176 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 178, end: 184 },
							},
							loc: { start: 178, end: 184 },
						},
						loc: { start: 178, end: 185 },
					},
					directives: [],
					loc: { start: 165, end: 185 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 188, end: 193 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 195, end: 198 },
							},
							loc: { start: 195, end: 198 },
						},
						loc: { start: 195, end: 199 },
					},
					directives: [],
					loc: { start: 188, end: 199 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "image", loc: { start: 202, end: 207 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Image",
										loc: { start: 210, end: 215 },
									},
									loc: { start: 210, end: 215 },
								},
								loc: { start: 210, end: 216 },
							},
							loc: { start: 209, end: 217 },
						},
						loc: { start: 209, end: 218 },
					},
					directives: [],
					loc: { start: 202, end: 218 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 221, end: 228 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Review",
										loc: { start: 231, end: 237 },
									},
									loc: { start: 231, end: 237 },
								},
								loc: { start: 231, end: 238 },
							},
							loc: { start: 230, end: 239 },
						},
						loc: { start: 230, end: 240 },
					},
					directives: [],
					loc: { start: 221, end: 240 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 243, end: 252 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 254, end: 262 },
							},
							loc: { start: 254, end: 262 },
						},
						loc: { start: 254, end: 263 },
					},
					directives: [],
					loc: { start: 243, end: 263 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 266, end: 275 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 277, end: 285 },
							},
							loc: { start: 277, end: 285 },
						},
						loc: { start: 277, end: 286 },
					},
					directives: [],
					loc: { start: 266, end: 286 },
				},
			],
			loc: { start: 106, end: 288 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 294, end: 300 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 305, end: 307 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 309, end: 311 },
							},
							loc: { start: 309, end: 311 },
						},
						loc: { start: 309, end: 312 },
					},
					directives: [],
					loc: { start: 305, end: 312 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 315, end: 320 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 322, end: 328 },
							},
							loc: { start: 322, end: 328 },
						},
						loc: { start: 322, end: 329 },
					},
					directives: [],
					loc: { start: 315, end: 329 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 332, end: 343 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 345, end: 351 },
							},
							loc: { start: 345, end: 351 },
						},
						loc: { start: 345, end: 352 },
					},
					directives: [],
					loc: { start: 332, end: 352 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 355, end: 361 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 363, end: 366 },
							},
							loc: { start: 363, end: 366 },
						},
						loc: { start: 363, end: 367 },
					},
					directives: [],
					loc: { start: 355, end: 367 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 370, end: 379 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 381, end: 389 },
							},
							loc: { start: 381, end: 389 },
						},
						loc: { start: 381, end: 390 },
					},
					directives: [],
					loc: { start: 370, end: 390 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 393, end: 402 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 404, end: 412 },
							},
							loc: { start: 404, end: 412 },
						},
						loc: { start: 404, end: 413 },
					},
					directives: [],
					loc: { start: 393, end: 413 },
				},
			],
			loc: { start: 289, end: 415 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 421, end: 426 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 416, end: 426 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 435, end: 443 } },
			directives: [],
			loc: { start: 428, end: 443 },
		},
	],
	loc: { start: 0, end: 444 },
} as unknown as DocumentNode;
