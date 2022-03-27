import React from "react";

import SlidingPortal from "../../Portals/SlidingPortal";
import { WrapperFavorites } from "./SlidingFavoriteStyles.jsx";
import ItemFavoriteFood from "../../Molecules/ItemsFood/ItemFavoriteFood/ItemFavoriteFood";
import { tempFavorite } from "./tempData";
import { FullContext } from "../../../pages/_app";
function SlidingFavorite() {
  const { openFavorites, setOpenFavorites } = React.useContext(FullContext);
  return (
    <SlidingPortal isOpen={openFavorites} setIsOpen={setOpenFavorites}>
      <WrapperFavorites>
        {tempFavorite.map((item, index) => {
          return <ItemFavoriteFood key={index} item={item} />;
        })}
      </WrapperFavorites>
    </SlidingPortal>
  );
}

export default SlidingFavorite;
