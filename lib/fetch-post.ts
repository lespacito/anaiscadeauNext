// Example API: https://jsonplaceholder.typicode.com/posts
export async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return posts;
  }