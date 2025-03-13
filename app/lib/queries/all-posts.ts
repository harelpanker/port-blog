export const AllPosts = `
  query AllPosts {
    posts(orderBy: createdAt_DESC, stage: PUBLISHED) {
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
