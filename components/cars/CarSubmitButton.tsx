"use client";
import { useFormStatus } from "react-dom";

const CarSubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className='w-full px-6 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
      type='submit'
      disabled={pending}
    >
      {pending ? "Submitting ..." : "Share Car"}
    </button>
  );
};

export default CarSubmitButton;
