import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/post/getPosts");
      const data = await response.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="hero-div">
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-5xl">Welcome to my blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Ayurveda, originating from ancient India, is a holistic approach to
          health and wellness that emphasizes balance and harmony between the
          mind, body, and spirit. <br /> <br />
          Rooted in natural remedies and lifestyle practices, Ayurveda focuses
          on personalized treatments based on individual body types, or doshas:
          Vata, Pitta, and Kapha. Through a combination of herbal medicine,
          dietary changes, yoga, meditation, and detoxification techniques,
          Ayurveda aims to prevent illness, promote longevity, and restore
          overall well-being. Its profound wisdom continues to inspire millions
          worldwide, offering timeless principles for living a vibrant and
          fulfilling life in harmony with nature.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="p-5 bg-green-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center ">
              Recent Posts
            </h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
