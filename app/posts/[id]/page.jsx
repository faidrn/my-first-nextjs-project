async function LoadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

export default async function Page ({ params }) {
    const { id } = await params

    const post = await LoadPost(id);

    return (
        <div>
            <h1>{id} - {post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

// params es una Promise y debe resolverse con await o React.use() antes de acceder a sus propiedades.