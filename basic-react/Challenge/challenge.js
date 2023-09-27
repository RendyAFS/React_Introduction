// Import React and ReactDOM libraries
const { useState } = React;
const { render } = ReactDOM;

// Counter component
function Counter() {
    const [count, setCount] = useState(0);

    // Function to increment the count
    const increment = () => {
        setCount(count + 1);
    };

    // Function to decrement the count
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h1>{count.toString().padStart('0')}</h1>
            <button onClick={decrement}>- 1</button>
            <button onClick={increment}>+ 1</button>
        </div>
    );
}

// Render the Counter component to the root div
render(<Counter />, document.getElementById('root'));
