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
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 202, end: 208 },
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
										value: "Image",
										loc: { start: 211, end: 216 },
									},
									loc: { start: 211, end: 216 },
								},
								loc: { start: 211, end: 217 },
							},
							loc: { start: 210, end: 218 },
						},
						loc: { start: 210, end: 219 },
					},
					directives: [],
					loc: { start: 202, end: 219 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 222, end: 229 },
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
										loc: { start: 232, end: 238 },
									},
									loc: { start: 232, end: 238 },
								},
								loc: { start: 232, end: 239 },
							},
							loc: { start: 231, end: 240 },
						},
						loc: { start: 231, end: 241 },
					},
					directives: [],
					loc: { start: 222, end: 241 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 244, end: 253 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 255, end: 263 },
							},
							loc: { start: 255, end: 263 },
						},
						loc: { start: 255, end: 264 },
					},
					directives: [],
					loc: { start: 244, end: 264 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 267, end: 276 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 278, end: 286 },
							},
							loc: { start: 278, end: 286 },
						},
						loc: { start: 278, end: 287 },
					},
					directives: [],
					loc: { start: 267, end: 287 },
				},
			],
			loc: { start: 106, end: 289 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 295, end: 301 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 306, end: 308 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 310, end: 312 },
							},
							loc: { start: 310, end: 312 },
						},
						loc: { start: 310, end: 313 },
					},
					directives: [],
					loc: { start: 306, end: 313 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 316, end: 321 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 323, end: 329 },
							},
							loc: { start: 323, end: 329 },
						},
						loc: { start: 323, end: 330 },
					},
					directives: [],
					loc: { start: 316, end: 330 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 333, end: 344 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 346, end: 352 },
							},
							loc: { start: 346, end: 352 },
						},
						loc: { start: 346, end: 353 },
					},
					directives: [],
					loc: { start: 333, end: 353 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 356, end: 362 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 364, end: 367 },
							},
							loc: { start: 364, end: 367 },
						},
						loc: { start: 364, end: 368 },
					},
					directives: [],
					loc: { start: 356, end: 368 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 371, end: 380 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 382, end: 390 },
							},
							loc: { start: 382, end: 390 },
						},
						loc: { start: 382, end: 391 },
					},
					directives: [],
					loc: { start: 371, end: 391 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 394, end: 403 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 405, end: 413 },
							},
							loc: { start: 405, end: 413 },
						},
						loc: { start: 405, end: 414 },
					},
					directives: [],
					loc: { start: 394, end: 414 },
				},
			],
			loc: { start: 290, end: 416 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 422, end: 427 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 417, end: 427 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 436, end: 444 } },
			directives: [],
			loc: { start: 429, end: 444 },
		},
	],
	loc: { start: 0, end: 445 },
} as unknown as DocumentNode;
