import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
    // eslint-disable-next-line no-console
    console.log('clicked');
  };
  return (
    <div className="main">
      <div>
        <p>{count}</p>
        <button type="button" onClick={() => console.log('click')}>
          Click me
        </button>
      </div>
      <div className="overview">
        ProductOverview
      </div>
      <div className="related">
        RelatedProducts
      </div>
      <div className="ratings">
        RatingsReviews
      </div>
    </div>
  );
}

export default App;
