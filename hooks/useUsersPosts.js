import React, { useCallback, useEffect, useState } from "react";

const useUsersPosts = () => {
  const [usersPosts, setUsersPosts] = useState([]);
  const [userId, setUserId] = useState(undefined);

  const getUsersPosts = useCallback(
    async (id) => {
      const response = await fetch(`/api/users/${id}/posts`);
      const data = await response.json();

      setUsersPosts(data);
    },
    [userId]
  );

  useEffect(() => {
    if (userId) {
      getUsersPosts(userId);
    }
  }, [getUsersPosts, userId]);

  return [usersPosts, setUserId, setUsersPosts];
};

export default useUsersPosts;
