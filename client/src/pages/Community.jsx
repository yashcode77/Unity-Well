import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Community() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getPosts");
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Recent Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="flex justify-center">
              <PostCard post={post} />
            </div>
          ))
        ) : (
          <p className="text-lg text-center">No posts available</p>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/search" className="text-lg text-teal-500 hover:underline">
          View all posts
        </Link>
      </div>
    </div>
  );
}
