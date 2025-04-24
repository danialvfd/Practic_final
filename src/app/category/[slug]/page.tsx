'use client'
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 10));
      });
  }, [params.slug]);

  return (
    <div className="container">
      <h1>دسته‌بندی: {params.slug}</h1>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
