import React from "react";
import { IPage } from "../models/chapter";

interface PagesProps {
  pages: IPage[];
  pageId: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

const Pages: React.FC<PagesProps> = ({
  pages,
  pageId,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="pages-container">
      <div className="carousal-container">
        <button onClick={handleNext} className="carousal-button"></button>
        <button onClick={handlePrevious} className="carousal-button"></button>
      </div>
      <div className="image-container">
        {pages.length > 0 ? (
          <>
            <div className="image">
              <img
                referrerPolicy="no-referrer"
                src={pages[pageId]?.image.file}
                alt=""
                key={pages[pageId]?.id}
              />
            </div>
            <div className="pagination">
              {pageId + 1}/{pages.length}
            </div>
          </>
        ) : (
          <span>No pages found</span>
        )}
      </div>
    </div>
  );
};

export default Pages;
