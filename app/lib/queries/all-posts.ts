export const AllPosts = `
  query AllPosts {
    posts(orderBy: publishedAt_DESC, stage: PUBLISHED) {
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
