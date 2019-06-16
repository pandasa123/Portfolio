import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={["gatsby", "tailwind", "react", "tailwindcss"]}
      />

      <div className="text-center">
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-bold no-underline text-gray-900"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
