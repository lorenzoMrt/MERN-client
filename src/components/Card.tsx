import { RandomAvatar } from "./RandomAvatar";

interface CardProps {
    name: string;
    bags: number;
}

export default function Card({name, bags}:CardProps) {
  return (
    <div key={name} className="group relative">
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <RandomAvatar/>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{`Bags: ${bags}`}</p>
        </div>
      </div>
    </div>
  );
}
