import React from 'react';

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
            <h1 className="text-3xl font-semibold mb-6">Meditation Information</h1>
            <div className="grid gap-20 md:grid-cols-2 w-200">
                {meditationSessions.map(session => (
                    <div key={session.id} className="border border-teal-500 hover:border-2 rounded-lg overflow-hidden transition-all">
                        <div className="h-64  bg-gray-200 flex justify-center items-center">
                            <img className="object-cover h-full w-full" src={session.image} alt="session image" />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{session.title}</h2>
                            <p className="text-sm italic mb-2">{session.category}</p>
                            <p className="text-gray-700 line-clamp-3">{session.description}</p>
                            <a
                                href={session.externalLink}
                                className="block mt-4 text-teal-500 hover:text-teal-600 transition-all duration-300"
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

export default Meditation;
