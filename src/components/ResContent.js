import { resDatas } from "../utils/mockData";
import ResCard from "./ResCard";

const ResContent = () => {
  return (
    <div className="res_content">
      {resDatas.map((resData) => (
        <ResCard resData={resData} key={resData.id} />
      ))}
    </div>
  );
};

export default ResContent;
