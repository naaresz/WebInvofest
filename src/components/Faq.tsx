import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqProps {
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-100 border-r-4 border-r-red-900 shadow-sm p-5 hover:shadow-md transition">
      
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 text-left"
      >
        {/* ICON DI KIRI */}
        <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md">
            <ChevronDown 
            size={18}
            className={`text-black transition-transform duration-300 ${
            open ? "rotate-180" : ""
            }`}
            />
        </div>

        {/* TEXT */}
        <span className="text-lg font-semibold">
          {question}
        </span>
      </button>

      {/* CONTENT */}
      {open && (
        <p className="text-gray-600 mt-3 ml-7 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default Faq;