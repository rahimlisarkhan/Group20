export const withAdminTable = (WrappedComponent) => {
  const HOComponent = (props) => {
    const [sort, setSort] = useState(0);
    const [sortedArray, setSortedArray] = useState(dataArray);
    const [sortIcon, setSortIcon] = useState();

    const { inputValue, setInputValue } = props;

    const changeInputValue = (rowTitle, newInputValue) => {
      setInputValue({ ...inputValue, [rowTitle]: newInputValue });
    };

    function sortFunction(col, data) {
      setSort(1);
      if (sort === 1) {
        data.sort((a, b) => (a[col] > b[col] ? 1 : -1));
        setSort(-1);
        setSortIcon("up");
      } else {
        data.sort((a, b) => (a[col] > b[col] ? -1 : 1));
        setSort(1);
        setSortIcon("down");
      }
      setSortedArray(data);
    }

    return (
      <WrappedComponent
        sortFunction={sortFunction}
        sort={sort}
        setSort={setSort}
        sortedArray={sortedArray}
        setSortedArray={setSortedArray}
        sortIcon={sortIcon}
        setSortIcon={setSortIcon}
        changeInputValue={changeInputValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
        {...props}
      />
    );
  };

  return HOComponent;
};
