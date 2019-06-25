import React from "react";

export default function Footer() {
  return (
    <footer className="fixed-bottom font-weight-bold bg-info text-black mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} FutureCV
    </footer>
  );
}
