import React, { useState } from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

type Props = {
  items: DropdownItem[];
  selectedId: string;
  onSelected?: (selectedId: string) => void;
};

export type DropdownItem = {
  id: string;
  value: string;
};

// only function works with react-onclickoutside
//  https://github.com/Pomax/react-onclickoutside/issues/327
function DropdownInternal({ selectedId, items = [], onSelected }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);

  (DropdownInternal as any).handleClickOutside = () => setOpen(false);

  const handleOnClick = (item: DropdownItem) => {
    if (selectedId !== item.id) {
      onSelected(item.id);
    }
    setOpen(false);
  };

  const selectedValue = items.find((v) => v.id == selectedId);

  return (
    <Wrapper>
      <Header tabIndex={0} role="button" onKeyPress={toggle} onClick={toggle}>
        <Title>
          <span>{selectedValue.value}</span>
          <Caret />
        </Title>
      </Header>
      {open && (
        <List>
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </List>
      )}
    </Wrapper>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => (DropdownInternal as any).handleClickOutside,
};

export const Dropdown = onClickOutside(DropdownInternal, clickOutsideConfig);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
`;

const Title = styled.div``;

const Caret = styled.span`
  margin-left: 3px;
  margin-bottom: 2px;
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: '';
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
`;

const List = styled.ul`
  position: absolute;
  top: 10px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  padding: 0;
  margin: 0;
  margin-top: 20px;

  li {
    list-style-type: none;

    &:first-of-type {
      > button {
        border-top: 1px solid #ccc;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }

    &:last-of-type > button {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    button {
      display: flex;
      justify-content: space-between;
      background-color: white;
      padding: 15px 20px 15px 20px;
      border: 0;
      border-bottom: 1px solid #ccc;
      width: 100%;
      text-align: left;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;

      &:hover,
      &:focus {
        cursor: pointer;
        background-color: #ccc;
      }
    }
  }
`;
