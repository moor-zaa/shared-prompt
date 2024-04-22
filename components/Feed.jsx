"use client";

import { useState } from "react";
import PromptCard from "./PromptCard";
import usePrompts from "@hooks/usePrompts";

const PromptCardList = ({ handleTagClick }) => {
  const [promptsData] = usePrompts();

  return (
    <div className="mt-16 prompt_layout">
      {promptsData.map((prompt) => (
        <PromptCard
          key={prompt._id}
          post={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for prompts"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={[]} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
