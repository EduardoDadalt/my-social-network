import UserController from "@/controller/UserController";
import ProfilePage from "../page";

export default ProfilePage;

export async function generateStaticParams() {
  const names = await UserController.getNames();

  return names.map((name) => ({ name }));
}
