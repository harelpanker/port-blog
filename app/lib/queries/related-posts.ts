export const RelatedPosts = `
  query RelatedPosts($currentPostId: ID!) {
    posts(
      where: {id_not: $currentPostId},
      first: 3, 
      orderBy: createdAt_DESC, 
      stage: PUBLISHED
    ) {
      title
      slug
      description
      image {
        url
        width
        height
      }
    }
  }
`;
