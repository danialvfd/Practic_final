'use client';

import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const CategoryPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const resolveParamsAndFetch = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data: Post[] = await res.json();
      setPosts(data.slice(0, 10));
    };
    resolveParamsAndFetch();
  }, [params]);
  if (!slug) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <h1>دسته‌بندی: {slug}</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
