import React from "react";

export default function Home() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <div className="text-3xl text-center">Hello user!</div>
            <button className="mt-5 p-2 bg-blue-500 text-white rounded" onClick={() => setCount(count + 1)}>
                {count}
            </button>
        </div>
    );
}
