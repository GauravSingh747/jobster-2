import StatItem from "./StatItem";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import { useSelector } from "react-redux";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);

  const defaultStats = [
    {
      title: "onGoing",
      count: stats.onGoing || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "completed",
      count: stats.completed || 0,
      icon: <FaCalendarCheck />,
      color: "#7AA874",
      bcg: "#C9F4AA",
    },
    {
      title: "Pending",
      count: stats.pending || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffbbc5",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
