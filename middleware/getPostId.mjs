// import { posts } from "../app.mjs";

// export const getPostId = (request, response, next) => {
//     const { body, paramas: { id } } = request;
//     const parsedId = parseInt(id);
//     if (isNaN(parsedId)) {
//         return response.status(400).send({msg: '400. Bad Request. Invalid I'})
//     }
//     const currentPost = posts[parsedId - 1]
//     if (currentPost === - 1) {
//         return response.status(404).send({msg: '404. Page not found.'})
//     }
//     posts[request.postId] = { ...posts[request.postId], ...body }
//     request.post = currentPost;
//     next();
// }