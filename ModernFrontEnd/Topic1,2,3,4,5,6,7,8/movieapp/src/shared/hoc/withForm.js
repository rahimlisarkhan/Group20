export const withAdminTable = (WrappedComponent) => {
  const HOComponent = (props) => {
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
