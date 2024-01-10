export const exerciseOption = {
  method: 'GET',
  params: { limit: '10' },
  headers: {
      'X-RapidAPI-Key': '83213e2fb5msh95c0bab8e212072p1b0b36jsn0e0e6a97bda3',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, option) => {
  const response = await fetch(url, option);
  const data = await response.json();

  return data;
};
