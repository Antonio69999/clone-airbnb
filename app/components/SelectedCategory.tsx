"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { categoryItems } from "../lib/categoryItems";
import Image from "next/image";
import { useState } from "react";

export function SelectedCategory() {
  const [SelectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto mb-36">
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={SelectedCategory === item.name ? "border-primary" : ""}
            onClick={() => setSelectedCategory(item.name)}
          >
            <CardHeader>
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={32}
                width={32}
                className="w-8 h-8"
              ></Image>
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
