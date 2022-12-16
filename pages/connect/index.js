import Connect from "components/templates/connect";
import Layout from "components/common/Layout";

/*** dataStatic ***/
import dataStatic from "./data.json";
/*** ========== ***/
export default function Home() {
  return (
    <>
      <Layout>
        <Connect dataStatic={dataStatic} />
      </Layout>
    </>
  );
}
