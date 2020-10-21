import React from "react";
import MyPlaceItem from "./MyPlaceItem";

const MyPlaceList = (props: {
  itemList: any;
  selectMarker: (id: number) => void;
  setSavePlace: (place: any) => void;
}) => {
  const { itemList, selectMarker, setSavePlace } = props;
  const list = itemList.map((item: any) => {
    return <MyPlaceItem key={item.id} id={item.id} place={item.place} selectMarker={selectMarker} setSavePlace={setSavePlace} />;
  });
  return <div className="place-list">{list}</div>;
};

export default MyPlaceList;
