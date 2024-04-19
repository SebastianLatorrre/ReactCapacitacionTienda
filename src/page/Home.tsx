import CRNavbar from "../components/CRNavbar";
import CRCard from "../components/CRCard";
import { Box } from "@mui/material";
import { data } from "../constans/data.json";

const Home = () => {
  return (
    <>
      <CRNavbar />
      <Box
        sx={{
          display: "flex",
          margin: 5,
          gap: 2,
        }}
      >
        {data.map((item) => (
          <CRCard key={item.id} product={item} />
        ))}
      </Box>
    </>
  );
};

export default Home;
