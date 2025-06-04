import WorkGrid from "./components/WorkGrid";

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center py-10">My Work</h1>
      <WorkGrid />
    </div>
  );
}
