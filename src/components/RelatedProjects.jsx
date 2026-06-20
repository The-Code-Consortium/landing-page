import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const globalRevealProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const allProjects = [
    {
        id: 'fintech',
        title: 'Fintech Dashboard',
        to: '/project/fintech-dashboard',
        image: '/project-2.jpg'
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Build',
        to: '/project/ecommerce-build',
        image: '/project-3.jpg'
    },
    {
        id: 'booking',
        title: 'AI Booking System',
        to: '/project/ai-booking-system',
        image: '/project-1.jpg'
    }
];

const RelatedProjects = ({ currentProject }) => {
    // Filter out the currently viewed project
    const filteredProjects = allProjects.filter(project => project.id !== currentProject);

    return (
        <section className="max-w-screen-2xl mx-auto border-l border-r border-gray-300 bg-white scroll-mt-24">
            <motion.div
                className="p-6 md:p-16 border-b border-gray-300"
                {...globalRevealProps}
            >
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black">Explore More Work</h2>
                <p className="font-mono text-sm text-gray-500 uppercase max-w-md mt-4">
                    A selection of other engineered platforms and high-performance digital assets built for modern enterprises.
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                {filteredProjects.map((project) => (
                    <MotionLink
                        key={project.id}
                        className="block flex flex-col group hover:bg-gray-50 transition-colors bg-white overflow-hidden"
                        to={project.to}
                        {...globalRevealProps}
                    >
                        <div className="overflow-hidden w-full h-48 md:h-64 border-b border-gray-300">
                            <img
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                src={project.image}
                            />
                        </div>
                        <div className="p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="font-bold text-lg group-hover:underline decoration-2 underline-offset-4">{project.title}</h3>
                                <span className="material-symbols-outlined text-gray-300 group-hover:text-black transition-colors">arrow_outward</span>
                            </div>
                            <div className="font-mono text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors mt-auto">
                                DETAILS <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                            </div>
                        </div>
                    </MotionLink>
                ))}
            </div>
        </section>
    );
};

export default RelatedProjects;
