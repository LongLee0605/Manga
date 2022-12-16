import Login from "components/templates/login";
import Layout from "components/common/Layout";

/*** dataStatic ***/
import dataStatic from "./data.json";
/*** ========== ***/
export default function Home() {
  return (
    <>
      <Layout>
        <Login dataStatic={dataStatic} />
      </Layout>
    </>
  );
}
