import React from "react";
import "./styles.css";

const Layout = props => (
  <div>
    <h1>My Header</h1>
    <main>My Main Section{props.children}</main>
    <h1>My Footer</h1>
  </div>
);

export default function App() {
  return (
    <div>
      <Layout>
        <p>page 1 body content</p>
        <p>more body content</p>
        <p>even more content ontop of that</p>
      </Layout>
      <br />
      <br />
      <Layout>
        <p>page 2 body content</p>
      </Layout>
    </div>
  );
}
