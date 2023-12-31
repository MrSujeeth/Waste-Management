import React from "react";
import Layout from "../components/Layout/Layout";

const AboutUs = () => {
  return (
    <Layout title={"About us"}>
      <div className="row aboutus">
        <div className="col-md-6 ">
          <img
            src="/images/about us.png"
            alt="contactus"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2 ">
            <p>Students of CSE Branch 2nd Year</p>
            <p>Developers:</p>
            <ul>
              <p>Prathamesh</p>
              <p>Sujeeth</p>
              <p>Nitin</p>
            </ul>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
