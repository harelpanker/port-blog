export const AllPosts = `
  query AllPosts {
    posts(orderBy: createdAt_DESC, stage: PUBLISHED) {
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
