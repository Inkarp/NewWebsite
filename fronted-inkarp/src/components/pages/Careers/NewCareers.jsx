
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NewCareers = () => {
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Clear previous content
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Step 1: Define the config BEFORE script loads
    window.khConfig = {
      identifier: '357ac919-3c5b-4878-922a-e01bc5fd29cd',
      domain: 'https://inkarpinstrument.keka.com/careers/',
      targetContainer: '#khembedjobs',
    };

    // Step 2: Force reload jobs
    const loadJobs = () => {
      // Remove existing script if it exists
      const existingScript = document.querySelector(
        'script[src="https://inkarpinstrument.keka.com/careers/api/embedjobs/js/357ac919-3c5b-4878-922a-e01bc5fd29cd"]'
      );

      if (existingScript) {
        existingScript.remove();
      }

      // Create and inject new script
      const script = document.createElement('script');
      script.src = 'https://inkarpinstrument.keka.com/careers/api/embedjobs/js/357ac919-3c5b-4878-922a-e01bc5fd29cd';
      script.defer = true;

      // Add error handling
      script.onload = () => {
        console.log('Keka jobs script loaded successfully');
        scriptLoadedRef.current = true;
      };

      script.onerror = () => {
        console.error('Failed to load Keka jobs script');
        if (containerRef.current) {
          containerRef.current.innerHTML = '<p class="text-center text-red-500">Failed to load job listings. Please try again later.</p>';
        }
      };

      document.head.appendChild(script);
    };

    // Load jobs immediately
    loadJobs();

    // Cleanup function
    return () => {
      const script = document.querySelector(
        'script[src="https://inkarpinstrument.keka.com/careers/api/embedjobs/js/357ac919-3c5b-4878-922a-e01bc5fd29cd"]'
      );
      if (script) {
        script.remove();
      }
    };
  }, []); // Empty dependency array to run once on mount

  // Optional: Add a refresh button for manual reload
  const refreshJobs = () => {
    if (containerRef.current) {
      containerRef.current.innerHTML = '<p class="text-center text-gray-500">Loading jobs...</p>';
    }

    // Force reload
    const script = document.querySelector(
      'script[src="https://inkarpinstrument.keka.com/careers/api/embedjobs/js/357ac919-3c5b-4878-922a-e01bc5fd29cd"]'
    );
    if (script) {
      script.remove();
    }

    setTimeout(() => {
      window.khConfig = {
        identifier: '357ac919-3c5b-4878-922a-e01bc5fd29cd',
        domain: 'https://inkarpinstrument.keka.com/careers/',
        targetContainer: '#khembedjobs',
      };

      const newScript = document.createElement('script');
      newScript.src = 'https://inkarpinstrument.keka.com/careers/api/embedjobs/js/357ac919-3c5b-4878-922a-e01bc5fd29cd';
      newScript.defer = true;
      document.head.appendChild(newScript);
    }, 100);
  };

  return (
    <section className="px-5 py-8 flex items-center justfy-center flex-col  " id="careers-section">
      <h1 className="p-5 text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full m-5  w-fit">
              Explore Career Opportunities
            </h1>
      <div className="max-w-7xl mx-auto border border-gray-300 rounded-xl py-5">
        <div className="rounded-2xl p-8 mb-8">
          <div
            id="khembedjobs"
            ref={containerRef}
            className="h-[600px] overflow-y-auto text-[#E63946] text-center font-[Roboto] px-4 "
          />
        </div>
      </div>
    </section>
  );
};

export default NewCareers;