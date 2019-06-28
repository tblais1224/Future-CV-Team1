import React from "react";

export default function Footer() {
  return (
    <footer className="fixed-bottom font-weight-bold bg-info text-black m-0 p-1 text-center">
      Copyright &copy; {new Date().getFullYear()} FutureCV
    </footer>
  );
}
