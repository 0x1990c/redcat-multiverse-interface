const ArrowDown = ({ color = '#E83324' }: any) => {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m1.783 2.755 7.585 7.586a1 1 0 0 0 1.415 0l7.585-7.586a1 1 0 0 0-.707-1.707H2.49a1 1 0 0 0-.707 1.707z"
        fill={color}
        stroke={color}
        fillRule="evenodd"
      />
    </svg>
  )
};

export default ArrowDown;