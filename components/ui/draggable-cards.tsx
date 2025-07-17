"use client";

import { motion, Reorder } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type DraggableCard = {
  id: string;
  title: string;
  src: string;
  description?: string;
};

interface DraggableCardsProps {
  cards: DraggableCard[];
  className?: string;
}

export function DraggableCards({ cards: initialCards, className }: DraggableCardsProps) {
  const [cards, setCards] = useState(initialCards);

  return (
    <div className={cn("w-full", className)}>
      <Reorder.Group
        axis="y"
        values={cards}
        onReorder={setCards}
        className="space-y-4"
      >
        {cards.map((card) => (
          <Reorder.Item
            key={card.id}
            value={card}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileDrag={{ scale: 1.05, rotate: 2 }}
              layout
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-gray-400 text-sm">
                      {card.description}
                    </p>
                  )}
                </div>
                <div className="text-gray-500">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V18C9 18.5523 8.55228 19 8 19C7.44772 19 7 18.5523 7 18V2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}