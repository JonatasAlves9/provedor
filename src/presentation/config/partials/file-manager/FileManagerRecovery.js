import React from "react";
import Body from "./components/Body";
import Recovery from "./views/Recovery";

import { BlockTitle } from '@/presentation/app/HOC/components';
import Layout from "./components/Layout";

const FileManager = () => {
  return (
    <Layout>
      <Body searchBar recoveryFilter
        title={
          <BlockTitle page>Recovery</BlockTitle>
        }
      >
        <Recovery />
      </Body>
    </Layout>
  );
};

export default FileManager;
