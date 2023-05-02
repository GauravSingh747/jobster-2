import { TbHomeStats } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { TbLayoutGridAdd } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";

const links = [
  { id: 1, text: "stats", path: "/", icon: <TbHomeStats /> },
  { id: 2, text: "all jobs", path: "all-jobs", icon: <TbReportSearch /> },
  { id: 3, text: "add job", path: "add-job", icon: <TbLayoutGridAdd /> },
  { id: 4, text: "profile", path: "profile", icon: <RiContactsFill /> },
];

export default links;
