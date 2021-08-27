export const fetchApi = async (
  url: string,
  options?: object,
  filterText?: string
) => {
  let filterList: Array<any>;
  const response = await fetch(url, options)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (filterText) {
        filterList = data.filter((item: any) =>
          item.title.includes(filterText)
        );
        return filterList;
      }
      return data;
    });
  return response;
};
