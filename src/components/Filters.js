import React, { useState } from 'react';
import './Filters.css';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const Filters = () => {
  const [showIdeal, setShowIdeal] = useState(false);
  const [showIdealOccasion, setShowIdealOccasion] = useState(false);
  const [showIdealWork, setShowIdealWork] = useState(false);
  const [showIdealFabric, setShowIdealFabric] = useState(false);
  const [showIdealSegment, setShowIdealSegment] = useState(false);
  const [showIdealSuitable, setShowIdealSuitable] = useState(false);
  const [showIdealRaw, setShowIdealRaw] = useState(false);
  const [showIdealPattern, setShowIdealPattern] = useState(false);

  const dropdownLists = () => {
    setShowIdeal(!showIdeal);
  };

  const dropdownListsOccasion = () => {
    setShowIdealOccasion(!showIdealOccasion);
  };

  const dropdownListsWork = () => {
    setShowIdealWork(!showIdealWork);
  };

  const dropdownListsFabric = () => {
    setShowIdealFabric(!showIdealFabric);
  };

  const dropdownListsSegment = () => {
    setShowIdealSegment(!showIdealSegment);
  };

  const dropdownListsSuitable = () => {
    setShowIdealSuitable(!showIdealSuitable);
  };

  const dropdownListsRaw = () => {
    setShowIdealRaw(!showIdealRaw);
  };

  const dropdownListsSegmentPattern = () => {
    setShowIdealPattern(!showIdealPattern);
  };

  return (
    <aside className='filters'>
      <div className='aside-items'>
        <input
          type='checkbox'
          id='customizable-checkbox'
          className='checkbox'
        />
        <label for='customizable-checkbox' className='customizable-label'>
          Customizble
        </label>
      </div>
      <hr className='aside-items-break' />
      <div className='aside-items'>
        <div className='aside-items-container'>
          <div>
            <h2 className='customizable-label'>IDEAL FOR</h2>
            <p className='all-text'>All</p>
          </div>
          {showIdeal ? (
            <IoIosArrowUp className='arrow' onClick={dropdownLists} />
          ) : (
            <IoIosArrowDown className='arrow' onClick={dropdownLists} />
          )}
        </div>
        {showIdeal ? (
          <div className='show-ideal-items-container'>
            <p className='unselect-text'>Unselect all</p>
            <div className='filter-group'>
              <label>
                <input type='checkbox' className='checkbox' /> Men
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Women
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Baby & Kids
              </label>
            </div>
          </div>
        ) : null}
      </div>
      <hr className='aside-items-break' />
      <div className='aside-items'>
        <div className='aside-items-container'>
          <div>
            <h2 className='customizable-label'>OCCASION</h2>
            <p className='all-text'>All</p>
          </div>
          {showIdealOccasion ? (
            <IoIosArrowUp className='arrow' onClick={dropdownListsOccasion} />
          ) : (
            <IoIosArrowDown className='arrow' onClick={dropdownListsOccasion} />
          )}
        </div>
        {showIdealOccasion ? (
          <div className='show-ideal-items-container'>
            <p className='unselect-text'>Unselect all</p>
            <div className='filter-group'>
              <label>
                <input type='checkbox' className='checkbox' /> Men
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Women
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Baby & Kids
              </label>
            </div>
          </div>
        ) : null}
      </div>
      <hr className='aside-items-break' />
      <div className='aside-items'>
        <div className='aside-items-container'>
          <div>
            <h2 className='customizable-label'>WORK</h2>
            <p className='all-text'>All</p>
          </div>
          {showIdealWork ? (
            <IoIosArrowUp className='arrow' onClick={dropdownListsWork} />
          ) : (
            <IoIosArrowDown className='arrow' onClick={dropdownListsWork} />
          )}
        </div>
        {showIdealWork ? (
          <div className='show-ideal-items-container'>
            <p className='unselect-text'>Unselect all</p>
            <div className='filter-group'>
              <label>
                <input type='checkbox' className='checkbox' /> Men
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Women
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Baby & Kids
              </label>
            </div>
          </div>
        ) : null}
      </div>
      <hr className='aside-items-break' />
      <div className='aside-items'>
        <div className='aside-items-container'>
          <div>
            <h2 className='customizable-label'>FABRIC</h2>
            <p className='all-text'>All</p>
          </div>
          {showIdealFabric ? (
            <IoIosArrowUp className='arrow' onClick={dropdownListsFabric} />
          ) : (
            <IoIosArrowDown className='arrow' onClick={dropdownListsFabric} />
          )}
        </div>
        {showIdealFabric ? (
          <div className='show-ideal-items-container'>
            <p className='unselect-text'>Unselect all</p>
            <div className='filter-group'>
              <label>
                <input type='checkbox' className='checkbox' /> Men
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Women
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Baby & Kids
              </label>
            </div>
          </div>
        ) : null}
      </div>
      <hr className='aside-items-break' />
      <div className='aside-items'>
        <div className='aside-items-container'>
          <div>
            <h2 className='customizable-label'>SEGMENT</h2>
            <p className='all-text'>All</p>
          </div>
          {showIdealSegment ? (
            <IoIosArrowUp className='arrow' onClick={dropdownListsSegment} />
          ) : (
            <IoIosArrowDown className='arrow' onClick={dropdownListsSegment} />
          )}
        </div>
        {showIdealSegment ? (
          <div className='show-ideal-items-container'>
            <p className='unselect-text'>Unselect all</p>
            <div className='filter-group'>
              <label>
                <input type='checkbox' className='checkbox' /> Men
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Women
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Baby & Kids
              </label>
            </div>
          </div>
        ) : null}
      </div>
      <hr className='aside-items-break' />
      <div className='aside-items'>
        <div className='aside-items-container'>
          <div>
            <h2 className='customizable-label'>SUITABLE FOR</h2>
            <p className='all-text'>All</p>
          </div>
          {showIdealSuitable ? (
            <IoIosArrowUp className='arrow' onClick={dropdownListsSuitable} />
          ) : (
            <IoIosArrowDown className='arrow' onClick={dropdownListsSuitable} />
          )}
        </div>
        {showIdealSuitable ? (
          <div className='show-ideal-items-container'>
            <p className='unselect-text'>Unselect all</p>
            <div className='filter-group'>
              <label>
                <input type='checkbox' className='checkbox' /> Men
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Women
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Baby & Kids
              </label>
            </div>
          </div>
        ) : null}
      </div>
      <hr className='aside-items-break' />
      <div className='aside-items'>
        <div className='aside-items-container'>
          <div>
            <h2 className='customizable-label'>RAW MATERIALS</h2>
            <p className='all-text'>All</p>
          </div>
          {showIdealRaw ? (
            <IoIosArrowUp className='arrow' onClick={dropdownListsRaw} />
          ) : (
            <IoIosArrowDown className='arrow' onClick={dropdownListsRaw} />
          )}
        </div>
        {showIdealRaw ? (
          <div className='show-ideal-items-container'>
            <p className='unselect-text'>Unselect all</p>
            <div className='filter-group'>
              <label>
                <input type='checkbox' className='checkbox' /> Men
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Women
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Baby & Kids
              </label>
            </div>
          </div>
        ) : null}
      </div>
      <hr className='aside-items-break' />
      <div className='aside-items'>
        <div className='aside-items-container'>
          <div>
            <h2 className='customizable-label'>PATTERN</h2>
            <p className='all-text'>All</p>
          </div>
          {showIdealPattern ? (
            <IoIosArrowUp
              className='arrow'
              onClick={dropdownListsSegmentPattern}
            />
          ) : (
            <IoIosArrowDown
              className='arrow'
              onClick={dropdownListsSegmentPattern}
            />
          )}
        </div>
        {showIdealPattern ? (
          <div className='show-ideal-items-container'>
            <p className='unselect-text'>Unselect all</p>
            <div className='filter-group'>
              <label>
                <input type='checkbox' className='checkbox' /> Men
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Women
              </label>
              <label>
                <input type='checkbox' className='checkbox' /> Baby & Kids
              </label>
            </div>
          </div>
        ) : null}
      </div>
      <hr className='aside-items-break' />
    </aside>
  );
};

export default Filters;
