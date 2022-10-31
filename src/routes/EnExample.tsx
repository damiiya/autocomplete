import SearchHead from "../component/SearchHead";
import { DataType } from "./../type";
import { ENDATA_URL } from "../config";
import { useCallback, useState } from "react";

export const EnExample = () => {
  // dropList & keyword
  const [keyword, setKeyword] = useState<string>("");
  const [keyList, setKeyList] = useState<DataType[]>();
  // loading spinner & drop visible
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isData, setIsData] = useState<boolean>(false);
  // for prop
  const [maxHeight, setMaxHeight] = useState<number>(5);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  // fetch data & filter new keyList
  const fetchData = async (stringToken: string, numberToken: string) => {
    setIsLoading(true);
    const response = await fetch(`${ENDATA_URL}`).then((res) => res.json());
    let keyLists = response.filter(
      (item: DataType) =>
        item.id.toString().includes(numberToken) ||
        item.age.toString().includes(numberToken) ||
        item.name.toLowerCase().includes(stringToken) ||
        item.address.toLowerCase().includes(stringToken) ||
        item.email.toLowerCase().includes(stringToken) ||
        item.gender.toLowerCase().includes(stringToken) ||
        item.phone.toLowerCase().includes(stringToken)
    );
    setKeyList(keyLists);
    setIsLoading(false);
    setIsData(true);
  };

  // input value => ()
  const handleSearch = useCallback(
    (key: string) => {
      const stringToken = key.toLowerCase();
      const numberToken = String(key);
      fetchData(stringToken, numberToken);
      setKeyword(key);
    },
    [keyword]
  );

  return (
    <>
      <SearchHead
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
        isLoading={isLoading}
        dataSet={keyList}
        isScroll={isScroll}
        isData={isData}
        setIsData={setIsData}
        maxHeight={maxHeight}
        placeHolder="Search your interest."
        DropItemStyle={{ backColor: "#f9faf7", height: 100 }}
        ItemMainTxtStyle={{ color: "#B2B300", fontSize: 8, fontWeight: 7 }}
        ItemSubTxtStyle={{
          color: "#6B6B6B",
          fontSize: 7,
          fontWeight: 5,
          lineHeight: 10,
        }}
        SubInfoStyle={{ color: "#8E8E8E" }}
      />
    </>
  );
};
