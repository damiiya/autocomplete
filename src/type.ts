import { Dispatch, SetStateAction } from "react";

export type DataType = {
  id: number;
  name: string;
  email: string;
  gender: string;
  mbti: string;
  letter: string;
  age: number;
  phone: string;
  address: string;
};
export interface DropPropsType {
  placeHolder?: string;
  isScroll?: boolean;
  isLoading?: boolean;
  isFocus?: boolean;
  isData?: boolean;
  dataSet?: DataType[];
  keyword?: string;
  onChange?: () => void;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  // StyleProp
  width?: string;
  height?: number;
  maxHeight?: number;
  color?: string;
  backColor?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  // StyleProp by tag
  DropContainerStyle?: {
    maxHeight?: number;
    height?: number;
  };
  DropItemStyle?: {
    backColor?: string;
    height?: number;
  };
  MainInfoStyle?: {
    width?: string;
  };
  ItemMainTxtStyle?: {
    fontSize?: number;
    fontWeight?: number;
    color?: string;
  };
  ItemSubTxtStyle?: {
    fontSize?: number;
    fontWeight?: number;
    lineHeight?: number;
    color?: string;
  };
  SubInfoStyle?: {
    width?: string;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
  };
}

export interface DataPropsType extends DropPropsType {
  handleSearch: (key: string) => void;
  setKeyword: Dispatch<SetStateAction<string>>;
  setIsData: Dispatch<SetStateAction<boolean>>;
}
