import styled from "styled-components";
import { useState, useEffect } from "react";
import BannerSlide from "../../components/Templates/Banners/BannerSlide";
import GrilledBurgers from "../../components/Templates/GrilledBurgers/GrilledBurgers";
import ListCategorySlide from "../../components/Organims/ListCategorySlide/ListCategorySlide";

import Layout from "../../Layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <section>
        <BannerSlide />
      </section>
      <section>
        <ListCategorySlide />
      </section>
      <section>
        <GrilledBurgers />
      </section>
    </Layout>
  );
}
