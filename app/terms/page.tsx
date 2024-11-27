import Navbar from "../components/navbar/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[calc(100vh-6rem)] font-[family-name:var(--poppins)]">
        <div className="container mx-auto h-full ">
          <h1 className="text-3xl font-bold mt-10 text-center">
            Terms and Condition
          </h1>
          <div className="h-full flex flex-col items-center justify-center content-center">
            <p className="text-4xl font-extrabold uppercase mb-9">
              Coming Soon
            </p>
            <p className="text-xl">
              We&apos;re carefully working on our terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
