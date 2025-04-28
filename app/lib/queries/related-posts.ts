// related-posts.ts
export const RelatedPosts = `
  query RelatedPosts($currentPostId: ID!) {
    posts(
      where: {id_not: $currentPostId}
      first: 3
      orderBy: createdAt_DESC
      stage: PUBLISHED
    ) {
      id
      title
      slug
      description
      tag {
        name
        slug
    }
      image {
        url
        width
        height
      }
    }
  }
`;
