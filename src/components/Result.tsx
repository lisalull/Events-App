import Event from "../models/Event";
import "./Result.css";

interface Props {
  event: Event;
}

const Result = ({ event }: Props) => {
  return <div className="Result">Result works</div>;
};

export default Result;
