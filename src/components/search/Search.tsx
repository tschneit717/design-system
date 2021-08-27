import { ChangeEvent, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { fetchApi } from '../../utils/api';

export interface SearchProps {
  dataSource: string;
}

interface TypeAheadItem {
  title: string;
  id: number | string;
}

interface TypeHeadList extends Array<TypeAheadItem> {}

export const Search = ({ dataSource }: SearchProps) => {
  const [searchText, setSearchText] = useState('');
  const [typeAhead, setTypeAhead] = useState<TypeHeadList>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchText(value);
    getTypeAheadData(value);
  };

  const getTypeAheadData = async (textData: string) => {
    let typeAheadList = await fetchApi(dataSource, {}, textData);
    setTypeAhead(typeAheadList);
  };

  const renderTypeAhead = () => {
    return searchText.length > 0 ? (
      <ul className='border' title='TypeAhead List' hidden={!typeAhead.length}>
        {typeAhead.map((item, index) => (
          <li
            className={`py-2 px-4 ${
              index !== typeAhead.length - 1 ? 'border-b' : ''
            }`}
            key={item.id}>
            <Link to={`/search/${encodeURIComponent(item.title)}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <></>
    );
  };

  return (
    <>
      <input
        type='text'
        name='search'
        className='py-2 px-4'
        value={searchText}
        onChange={(e) => {
          handleSearch(e);
        }}
      />
      <Link
        to={`/search/${encodeURIComponent(searchText)}`}
        title='Search Button'
        type='submit'>
        <BiSearch></BiSearch>
      </Link>
      {renderTypeAhead()}
    </>
  );
};
