"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { decrement, increment } from "../store/slices/slice";

export default function Home() {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
      <div className="bg-green-400">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
  );
}
