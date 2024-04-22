"use client";

import Profile from "@components/Profile";
import useUsersPosts from "@hooks/useUsersPosts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MyProfile = () => {
  const { data: session } = useSession();
  const [usersPosts, setUserId, setUsersPosts] = useUsersPosts();
  const router = useRouter();

  useEffect(() => {
    if (session?.user.id) setUserId(session.user.id);
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = usersPosts.filter((p) => p._id !== post._id);

        setUsersPosts(filteredPosts);
      } catch (error) {}
    }
  };

  return (
    <Profile
      name={"My"}
      desc="welcome to your personilized profile page"
      data={usersPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
