import React from 'react';

interface ChaptersProps {
    chapters: number[];
    chapterId: number | undefined;
    handleChapterChange: (chapterId: number) => void;
}

const Chapters: React.FC<ChaptersProps> = ({
    chapters,
    chapterId,
    handleChapterChange,
}) => {
    return (
        <div className="chapters-container">
            {chapters.map((chapter: number, index) => (
                <button
                    key={`chapter-${chapter}`}
                    className={chapter === chapterId ? 'selected' : ''}
                    onClick={() => handleChapterChange(chapter)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Chapters;
