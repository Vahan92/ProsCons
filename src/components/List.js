import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

const List = (props) => {
  const [list, setList] = useState([]);
  const [editedValue, setEditedValue] = useState('');
  const [newValue, setNewValue] = useState('');
  const [editIndex, setEditIndex] = useState('');
  const [activateInputIndex, SetActivateInputIndex] = useState(null);

  const searchInput = useRef(null);

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, [editedValue]);

  const changeValue = (index) => {
    const selected = list[index];
    if (editedValue === selected.value || editedValue === '') {
      return;
    } else {
      setList(list.map((el, i) => (i === index ? { ...el, ...{ value: editedValue } } : el)))
    }
  }

  const getEditedValue = (evt) => {
    const inputValue = evt.target.value.trim();
    setEditedValue(inputValue);
    SetActivateInputIndex(editIndex);
    if (inputValue === '') {
      setList(list.filter((element, i) => i !== editIndex));
    }
  }

  const getNewValue = (evt) => {
    setNewValue(evt.target.value.trim());
  }

  const addValue = () => {
    if (newValue === '') {
      return;
    } else {
      const valueWithId = {
        value: newValue,
        id: Math.random() * Math.random() * (list.length + 1)
      }
      setList([...list, valueWithId])
      setNewValue('');
    }
  }

  return (
    <Container>
      <h2>{props.title}</h2>
      <div>
        {list.map((el, i) => {
          return <div key={el.id + el.value + i}><span>{i + 1}. </span><input type="text" name="result" ref={i === activateInputIndex ? searchInput : null} defaultValue={el.value} onFocus={() => setEditIndex(i)} onChange={getEditedValue} onBlur={() => changeValue(i)} /></div>
        })}
        <div>
          <span>{list.length + 1}. </span>
          <input type="text" name="pros" onChange={getNewValue} onBlur={addValue} value={newValue} />
        </div>
        {newValue &&
          <div>
            <span>{list.length + 2}. </span>
            <input type="text" name="pros" onChange={getNewValue} onBlur={addValue} />
          </div>}
      </div>
    </Container>
  )
};

const Container = styled.div`
width: 50%;
h2 {
  text-align: center;
  padding: 16px 0;
  border: 1px solid black;
}
> div {
  padding: 0 16px;
> div {
  margin: 16px 0;
  span {
    font-weight: bold;
  }
  input {
   border: none;
   &:focus {
     height: 20px;
    }
 }
}

} 
`;


export default List;