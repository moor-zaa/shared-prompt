import React, { useCallback, useEffect, useState } from "react";

const usePrompts = () => {
  const [promptsData, setPromptsData] = useState([]);

  const getPromptData = useCallback(async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setPromptsData(data);
  }, []);

  useEffect(() => {
    getPromptData();
  }, [getPromptData]);

  return [promptsData];
};

export default usePrompts;
