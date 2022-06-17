import { useState, useEffect } from 'react';

const Pug = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    updateData(data);
  }, [data]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      
    </div>
  );
};

export default Pug;
