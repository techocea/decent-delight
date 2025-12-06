import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-full py-10 flex items-center justify-center w-full">
      <SignIn />
    </div>
  );
}
