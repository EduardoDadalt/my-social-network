import UserController from "@/controller/UserController";
import { Profile } from "@/interfaces/Profile";

export default async function ProfilePage({
  params: { username },
}: {
  params: { username?: string };
}) {
  let profile: Profile | null | undefined;
  if (username) {
    profile = await UserController.getProfileByUsername(username);
  } else {
    profile;
    //todo get authenticated user profile
  }

  return (
    <>
      <h1>Profile</h1>
      <div>{profile?.username}</div>
      <div>{profile?.name}</div>
      <div>{profile?.bio}</div>
    </>
  );
}
