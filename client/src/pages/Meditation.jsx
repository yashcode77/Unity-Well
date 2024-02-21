
import React from 'react';
import AnxietyPage from './Meditation/AnxietyPage';

function Meditation() {

    const meditationSessions = [
        {
            id: 1,
            title: 'Anxiety & Stress Reduction',
            category: 'Stress Relief',
            description: 'Meditation apps can help to relax an anxious mind by providing a 20-minute directed or unstructured video (the time differs from app to app). These meditation apps aid in assessing stress levels and reducing them through the use of meditation resources that include images and music.',
            image: 'https://i.pinimg.com/564x/c8/92/ad/c892ad63efdee5df021ab09568bf4726.jpg',
            externalLink: '/meditation/AnxietyPage',
        },
        {
            id: 2,
            title: 'Deep Sleep',
            category: 'Sleep Aid',
            description: 'This type of meditation focuses on creating a fun and soothing environment by playing calming nature and melody tracks. This assists users in feeling a sense of peace, which encourages sleep.',
            image: 'https://i.pinimg.com/564x/ae/1d/59/ae1d598cee336e84f697fc0e0e90da55.jpg',
            externalLink: 'https://example.com/deep-sleep-meditation',
        },
        {
            id: 3,
            title: 'Meditation',
            category: 'Awareness',
            description: 'Being aware is a blessing, and these apps help their users to relax and refocus their knowledge through their everyday calm sessions.',
            image: 'https://i.pinimg.com/564x/e6/ba/7e/e6ba7eb0f4c6df5594ee0bd84e8b7bff.jpg',
            externalLink: '/meditation/StepMeditation',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-6">Meditation Sessions</h1>
            <div className="grid gap-4 md:grid-cols-2">
                {meditationSessions.map(session => (
                    <div key={session.id} className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
                        <div className="h-[260px] w-full bg-gray-200 flex justify-center items-center">
                            <div className="h-[260px] w-full flex justify-center items-center">
                                <img className="object-contain max-h-full max-w-full" src={session.image} alt="session image" />
                            </div>
                        </div>
                        <div className='p-3 flex flex-col gap-2'>
                            <p className='text-lg font-semibold line-clamp-2'>{session.title}</p>
                            <span className='italic text-sm'>{session.category}</span>
                            {/* <p className="text-gray-700">{session.description}</p> */}
                            <a
                                href={session.externalLink}
                                className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Meditation
