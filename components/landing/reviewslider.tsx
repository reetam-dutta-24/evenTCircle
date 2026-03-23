"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { reviewsList } from "@/lib/data";
import { ArrowLeft, ArrowRight, User2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function reviewslider() {
  const [currentReview, setCurrentReview] = useState([1, 2, 3]);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const rightcircle = () => {
    let length = reviewsList.length;
    setDirection(1);
    if (currentReview[2] === length) {
      setCurrentReview([1, 2, 3]);
    } else {
      setCurrentReview(currentReview.map((review) => review + 3));
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      rightcircle();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentReview]);

  const leftcircle = () => {
    setDirection(-1);
    if (currentReview[0] === 1) {
      setCurrentReview([
        reviewsList.length - 2,
        reviewsList.length - 1,
        reviewsList.length,
      ]);
    } else {
      setCurrentReview(currentReview.map((review) => review - 3));
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };
  return (
    <div>
      <div className="flex gap-5 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentReview.join("-")}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.35,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex gap-5"
          >
            {/* Card 1 */}
            <div className="w-100 h-85 rounded-2xl glass border-l-[var(--purple-dark)] border-l-4 border-gray-700 p-8">
              <div className="flex flex-col gap-5">
                <User2
                  color="purple"
                  size={40}
                  className="bg-[var(--purple-dim)] rounded-lg p-2"
                />
                <p className="text-[var(--text-primary)]">
                  <span className="text-[var(--text-secondary)]">By:</span>{" "}
                  {reviewsList[currentReview[0] - 1].name}
                </p>
                <p className="text-[var(--text-secondary)]">
                  "{reviewsList[currentReview[0] - 1].review}"
                </p>
                <div className="p-2 w-fit rounded-full bg-[var(--purple-dim)]">
                  <p className="text-[var(--purple-accent)]">
                    {reviewsList[currentReview[0] - 1].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-100 h-85 rounded-2xl glass border-l-[var(--purple-dark)] border-l-4 border-gray-700 p-8">
              <div className="flex flex-col gap-5">
                <User2
                  color="purple"
                  size={40}
                  className="bg-[var(--purple-dim)] rounded-lg p-2"
                />
                <p className="text-[var(--text-primary)]">
                  <span className="text-[var(--text-secondary)]">By:</span>{" "}
                  {reviewsList[currentReview[1] - 1].name}
                </p>
                <p className="text-[var(--text-secondary)]">
                  "{reviewsList[currentReview[1] - 1].review}"
                </p>
                <div className="p-2 w-fit rounded-full bg-[var(--purple-dim)]">
                  <p className="text-[var(--purple-accent)]">
                    {reviewsList[currentReview[1] - 1].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-100 h-85 rounded-2xl glass border-l-[var(--purple-dark)] border-l-4 border-gray-700 p-8">
              <div className="flex flex-col gap-5">
                <User2
                  color="purple"
                  size={40}
                  className="bg-[var(--purple-dim)] rounded-lg p-2"
                />
                <p className="text-[var(--text-primary)]">
                  <span className="text-[var(--text-secondary)]">By:</span>{" "}
                  {reviewsList[currentReview[2] - 1].name}
                </p>
                <p className="text-[var(--text-secondary)]">
                  "{reviewsList[currentReview[2] - 1].review}"
                </p>
                <div className="p-2 w-fit rounded-full bg-[var(--purple-dim)]">
                  <p className="text-[var(--purple-accent)]">
                    {reviewsList[currentReview[2] - 1].location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default reviewslider;
