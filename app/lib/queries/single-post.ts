export const singlePost = `
query SinglePost($slug: String!) {
    post(where: { slug: $slug }) {
        id
        publishedAt
        title
        slug
        seoTitle
        seoDescription
        description
        image {
            url
            width
            height
        }
        tag {
            name
            slug
        }
        author {
            name
            slug
            title
            linkedin
            image {
                url
                width
                height
            }
        }
        body {
            html
        }
    }
}
`;
