import { css } from "@emotion/react";
import Button from "./button/BaseButton";
import { TInputAttrType } from "./form/form";
import Input from "./form/Input";

interface ISearchBar extends Omit<TInputAttrType, "name"> {
  className?: string;
  name: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ className, onSubmit, onInput, ...props }: ISearchBar) => {
  return (
    <form onSubmit={onSubmit} css={searchBarStyle} className={className}>
      <Input onInput={onInput} {...props} />
      <Button type="submit">검색</Button>
    </form>
  );
};

export default SearchBar;

// styles
const searchBarStyle = css`
  display: flex;
  align-items: center;
  column-gap: 4px;

  button {
    flex-shrink: 0;
    width: 60px;
    height: 40px;
  }
`;
