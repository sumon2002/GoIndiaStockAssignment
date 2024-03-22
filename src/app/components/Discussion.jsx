import { Datas } from "../Data";
import Cards from "./Cards";

function Discussion({ activeTab }) {
  return (
    <div
      className={`sm:flex flex-col gap-2 shrink-0 flex-1 w-full h-full overflow-hidden  ${
        activeTab === "discussion" ? "flex" : "hidden"
      }`}
    >
      <h1 className=" text-2xl hidden sm:block">
        <span className="text-red-700 bg-gray-200">DISCUSSION FORUM</span>
      </h1>
      <div className=" overflow-scroll no-scrollbar">
        <div className="flex flex-col gap-2  ">
          {Datas.map((data) => {
            return <Cards key={data.id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Discussion;
