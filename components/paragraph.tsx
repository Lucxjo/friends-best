import React from "react";

export function Paragraph ({children}: {children: React.ReactNode}) {
  return (
    <p className="px-4 dark:text-gray-300">
        {children}
    </p>
  )
}