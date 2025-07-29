import { useCount } from '@/context/CountContext';

const CounterApp: React.FC = () => {
  const {count, increment, decrement}= useCount();


  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">
      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-6">🤖 Fun Counter App 🎉</h1>

      {/* Funny message */}
      <p className="text-lg font-medium mb-4">
        Current count: {count} {count === 0 ? "🙈 No clicks yet!" : count % 10 === 0 && count !== 0 ? "🔥 You're on fire!" : ""}
      </p>

      {/* Counter Display */}
      <div className="text-6xl font-bold mb-8">
        {count}
      </div>

      {/* Buttons */}
      <div className='flex space-x-4'>
        <button onClick={increment} className='bg-green-600 hover:bg-red-400 text-white text-bold p-3 text-md rounded-md'>Increment </button>
        <button onClick={decrement} className='bg-yellow-600 hover:bg-blue-600 text-white text-bold p-3 text-md rounded-md'>Decrement </button>
      </div>

      
      {/* Footer message */}
      <p className="mt-8 text-sm text-white opacity-75">
        Keep clicking, who knows what happens at 100? 😏
      </p>
    </div>
  );
}

export default CounterApp;
