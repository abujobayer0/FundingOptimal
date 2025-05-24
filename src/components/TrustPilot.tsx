import React from 'react';
import { Star } from 'lucide-react';

const TrustpilotRating = () => {
  return (
    <div>
      <div className="flex items-center mb-6 justify-center gap-2">
        <div className="text-white text-sm font-bold">Excellent</div>

        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-5 h-5 rounded-sm flex items-center justify-center ${
                index === 4
                  ? 'bg-[linear-gradient(to_right,#22c55e_50%,#DCDCE6_50%)]'
                  : 'bg-green-500'
              }`}
            >
              <Star className="w-3 h-3 text-white fill-white" />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-primary fill-primary" />

          <span className="text-white text-sm font-light">Trustpilot</span>
        </div>
      </div>
    </div>
  );
};

export default TrustpilotRating;
