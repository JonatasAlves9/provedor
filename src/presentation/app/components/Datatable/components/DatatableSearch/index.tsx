import {useState} from 'react';
import {Button, Icon} from '@/presentation/app/HOC/components';

export const DatatableSearch = () => {
  const [onSearch, setonSearch] = useState(true);
  const [tablesm, updateTableSm] = useState(false);
  const [onSearchText, setSearchText] = useState('');

  // onChange function for searching name
  const onFilterChange = (e) => {
    setSearchText(e.target.value);
  };

  const toggle = () => setonSearch(!onSearch);

  return (
    <div className='position-relative card-tools-toggle mt-1'>
      <div className='card-title-group'>
        <div></div>
        <div className='card-tools me-n1'>
          <ul className='btn-toolbar gx-1'>
            <li>
              <a
                href='#search'
                onClick={(ev) => {
                  ev.preventDefault();
                  toggle();
                }}
                className='btn btn-icon search-toggle toggle-search'
              >
                <Icon name='search'></Icon>
              </a>
            </li>
            <li className='btn-toolbar-sep'></li>
            <li>
              <div className='toggle-wrap'>
                <div className={`toggle-content ${tablesm ? 'content-active' : ''}`}>
                  <ul className='btn-toolbar gx-1'>
                    <li className='toggle-close'>
                      <Button
                        className='btn-icon btn-trigger toggle'
                        onClick={() => updateTableSm(false)}
                      >
                        <Icon name='arrow-left'></Icon>
                      </Button>
                    </li>
                    <li>
                      <a className='btn btn-trigger btn-icon dropdown-toggle'>
                        <Icon name='filter-alt'></Icon>
                      </a>
                    </li>
                    <li>
                      <a className='btn btn-trigger btn-icon dropdown-toggle'>
                        <Icon name='setting'></Icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={`card-search search-wrap ${!onSearch && 'active'}`}>
        <div className='card-body'>
          <div className='search-content'>
            <Button
              className='search-back btn-icon toggle-search active'
              onClick={() => {
                setSearchText('');
                toggle();
              }}
            >
              <Icon name='arrow-left'></Icon>
            </Button>
            <input
              type='text'
              className='border-transparent form-focus-none form-control'
              placeholder='Digite para pesquisar...'
              value={onSearchText}
              onChange={(e) => onFilterChange(e)}
            />
            <Button className='search-submit btn-icon'>
              <Icon name='search'></Icon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
