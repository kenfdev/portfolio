import { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import { styled } from '../../../styles/stitches';
import { Box } from '../../general/Box';

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
      onSelected?.(item.id);
    }
    setOpen(false);
  };

  const selectedValue = items.find((v) => v.id == selectedId);

  return (
    <Wrapper>
      <Header tabIndex={0} role="button" onKeyPress={toggle} onClick={toggle}>
        <Box>
          <span>{selectedValue?.value}</span>
          <Caret />
        </Box>
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

const Wrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
});

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
  width: '100%',
});

const Caret = styled('span', {
  marginLeft: '3px',
  marginBottom: '2px',
  display: 'inline-block',
  width: 0,
  height: 0,
  verticalAlign: 'middle',
  content: '',
  borderTopStyle: 'solid',
  borderTopWidth: '4px',
  borderRight: '4px solid transparent',
  borderBottom: '0 solid transparent',
  borderLeft: '4px solid transparent',
});

const List = styled('ul', {
  position: 'absolute',
  top: '10px',
  right: '0px',
  boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
  padding: 0,
  margin: 0,
  marginTop: '20px',

  li: {
    listStyleType: 'none',
    '&:first-of-type': {
      '> button': {
        borderTop: '1px solid #ccc',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
      },
    },

    '&:last-of-type > button': {
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    },

    button: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: '15px 20px 15px 20px',
      border: 0,
      borderBottom: '1px solid #ccc',
      width: '100%',
      textAlign: 'left',
      borderLeft: '1px solid #ccc',
      borderRight: '1px solid #ccc',

      '&:hover,&:focus': {
        cursor: 'pointer',
        backgroundColor: '#ccc',
      },
    },
  },
});
