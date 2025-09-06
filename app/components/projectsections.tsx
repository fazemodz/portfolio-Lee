import React from 'react';

interface Projectsectionsdata {
  ProjectTitle: string;
  ProjectDescription: string;
  ProjectImage: string;
  ProjectURL: string;
  ProjectSourceCodeURL?: string;
}

const Projectsections: React.FC<Projectsectionsdata> = ({
  ProjectTitle,
  ProjectDescription,
  ProjectImage,
  ProjectURL,
  ProjectSourceCodeURL,
}) => {
  return (
    <section className="bg-gray-800 rounded-lg p-6">
      <div className="flex flex-col items-center space-y-6">
        {/* Image on top */}
        <div className="w-full flex justify-center">
          <img src={ProjectImage} alt={ProjectTitle} className="rounded-lg shadow-md w-full h-auto" />
        </div>

        {/* Text below the image */}
        <div className="text-center text-white">
          <h3 className="text-2xl font-semibold">{ProjectTitle}</h3>
          <p className="mt-4">{ProjectDescription}</p>
        </div>

        {/* Buttons below the text */}
        <div className="flex gap-4 justify-center mt-6">
          {/* Visit Project Button */}
          <a
            className="inline-flex items-center gap-2 rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
            target="_blank"
            rel="noopener noreferrer"
            href={ProjectURL}
          >
            <span className="text-sm font-medium">Visit Project</span>
          </a>

          {ProjectSourceCodeURL && (
            <a
              className="inline-flex items-center gap-2 rounded-sm border border-green-600 bg-green-600 px-8 py-3 text-white hover:bg-transparent hover:text-green-600 focus:ring-3 focus:outline-hidden"
              target="_blank"
              rel="noopener noreferrer"
              href={ProjectSourceCodeURL}
            >
              <span className="text-sm font-medium">View Source Code</span>
            </a>
          )}


        </div>
      </div>
    </section>
  );
};

export default Projectsections;
