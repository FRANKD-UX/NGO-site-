import React from "react";

interface FooterProps { }

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div>© {new Date().getFullYear()} Waste Management Foundation</div>
        
      </div>
    </footer>
  );
};