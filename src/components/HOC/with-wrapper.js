const withWrapper = (WrappedComponent, CustomWrapper) => (props) => {
  if (CustomWrapper) {
    return (
      <CustomWrapper>
        <WrappedComponent {...props} />
      </CustomWrapper>
    );
  }
  return (
    <div className="g__wrapper">
      <WrappedComponent {...props} />
    </div>
  );
};
export default withWrapper;
