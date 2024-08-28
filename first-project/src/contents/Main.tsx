import { useState } from "react";
import { UserList } from "./UserList";
import { PostList } from "./PostList";

export function Main() {
  const [isUserList, setIsUserList] = useState<boolean>(false);

  const handleUserList = () => setIsUserList(true);
  const handlePostList = () => setIsUserList(false);

  return (
    <div>
      <button onClick={handleUserList}>ユーザー一覧</button>
      <button onClick={handlePostList}>投稿一覧</button>

      {isUserList ? <UserList /> : <PostList />}
    </div>
  );
}
