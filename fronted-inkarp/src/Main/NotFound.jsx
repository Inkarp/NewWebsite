import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container min-h-screen px-6 py-12 mx-auto flex flex-col lg:flex-row items-center lg:gap-12">
                <div className="w-full lg:w-1/2">
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>

                    <h1 className="mt-3 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                        We lost this page
                    </h1>

                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center mt-6 gap-4 flex-wrap">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-gray-700 transition bg-white border rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12l3.75-3.75M3 12h18" />
                            </svg>
                            Go back
                        </button>

                        <Link
                            to="/"
                            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        >
                            Take me home
                        </Link>
                    </div>

                    {/* Helpful Links */}
                    <div className="mt-10 space-y-6">
                        <div>
                            <Link
                                to="/verticals"
                                className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                            >
                                <span>Documentation</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Dive in to learn all about our product.
                            </p>
                        </div>

                        <div>
                            <Link
                                to="/insights-and-updates/blogs"
                                className="inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                            >
                                <span>Our Blog</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Explore insights and stories from our team.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full mt-8 lg:mt-0 lg:w-1/2">
                    <img
                        className="w-full lg:h-[32rem] h-80 md:h-96 rounded-xl object-cover shadow-lg"
                        src="https://images.unsplash.com/photo-1508881598441-324f3974994b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Not Found"
                    />
                </div>
            </div>
        </section>
    );
}
