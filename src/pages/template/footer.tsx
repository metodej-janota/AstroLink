import React from "react";

export default function footer() {
  return (
    <div className="container mx-auto">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Metoděj Janota
      </p>
    </div>
  );
}
