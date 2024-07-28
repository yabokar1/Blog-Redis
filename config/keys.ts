import production from "./prod";
import development from "./dev";
import ci from "./ci";

const getConfig = () => {
  const env = process.env.NODE_ENV || "development";
  switch (env) {
    case "production":
      return production;
    case "development":
      return development;
    default:
      return ci;
  }
};

export default getConfig();
