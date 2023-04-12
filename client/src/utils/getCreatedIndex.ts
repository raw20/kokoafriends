function getCreatedIndex(data?: number[]) {
  let index =
    data?.reduce(function (a, b) {
      return Math.max(a, b);
    }, 0) || 0;

  return index;
}

export default getCreatedIndex;
