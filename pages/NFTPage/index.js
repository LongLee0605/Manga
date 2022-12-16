import NFTPage from "components/templates/NFTPage";
import Layout from "components/common/Layout";

/*** dataStatic ***/
import dataStatic from "./data.json";
/*** ========== ***/
export default function Home() {
  return (
    <>
      <Layout>
        <NFTPage dataStatic={dataStatic} />
      </Layout>
    </>
  );
}
