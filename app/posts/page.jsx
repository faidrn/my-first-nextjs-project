import PostCard from "@/components/PostCard"; // @ reemplaza la ruta ../../components/PostCard
import './posts.css';

// Peticion al backend - API
async function loadPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    // await new Promise(resolve => setTimeout(resolve, 5000));

    return data;
}


// Renderiza en el frontend
async function PostPages() {

    const posts = await loadPosts();

    return (
        <div className="grid">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostPages;