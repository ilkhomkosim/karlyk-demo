import Footer from "@/libs/Footer";
import Top from "@/libs/Top";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import Head from "next/head";


const withLayoutBasic = (Component: any) => {
  return (props: any) => {
    const device = useDeviceDetect();

    if(device == "mobile") {
      return (
        <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="mobile-wrap">
          <Stack id={"top"}>
            <Top />
          </Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack id={"footer"}>
            <Footer />
          </Stack>
        </Stack>
      </>
      )
    } else {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack id={"top"}>
            <Top />
          </Stack>

          <Stack
            className="header-basic"
            style={{
              backgroundImage: `url(/img/banner/properties.png)`,
              backgroundSize: "cover",
              boxShadow: "inset 10px 40px 150px 40px rgba(24 22 36)",
            }}
          >
            <Stack className={"container"}>
              <strong>Search</strong>
              <span>We are gled to see you again!</span>
            </Stack>
          </Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack id={"footer"}>
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
  };
};

export default withLayoutBasic;
