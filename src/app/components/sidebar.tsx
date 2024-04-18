// const items = [
//   {
//     name: "Home",
//     path: "/",
//     icon: Home,
//   },
//   {
//     name: "Add donor",
//     path: "/",
//     icon: Plus,
//   },
//   {
//     name: "Donor List",
//     path: "/",
//     icon: Plus,
//   },
// ];

export default function sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-300">
      <div className="flex h-48 flex-col justify-center text-center">
        <h1 className="text-3xl font-bold">LIFELINE</h1>
        <p className="text-lg">Donor List Repository</p>
      </div>
    </div>
  );
}
