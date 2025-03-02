import { GraphQLClient } from 'graphql-request';

export const HygraphClient = () => {
	const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT!);

	return client;
};
