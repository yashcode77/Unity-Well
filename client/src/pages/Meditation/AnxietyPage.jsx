import React from 'react';

const AnxietyPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-semibold mb-6">What is Anxiety?</h1>
                <img src="https://i.pinimg.com/564x/3f/27/40/3f2740c6bf9f6d633f333e511dfe00bb.jpg" alt="Anxiety" className="mb-4" />
                <p className="text-lg mb-4">
                    According to the Anxiety and Depression Association of America (ADAA), around 40 million people in the United States have an anxiety disorder. It is the most common group of mental illnesses in the country. However, only 36.9% of people with an anxiety disorder receive treatment.
                </p>
                <p className="text-lg mb-4">
                    The American Psychological Association (APA) defines anxiety as “an emotion characterized by feelings of tension, worried thoughts, and physical changes like increased blood pressure.”
                </p>
                <p className="text-lg mb-4">
                    Knowing the difference between typical feelings of anxiety and an anxiety disorder requiring medical attention can help a person identify and treat the condition.
                </p>
                <p className="text-lg mb-8">
                    Learn more about anxiety in our dedicated hub.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Anxiety and Anxiety Disorders</h2>
                <p className="text-lg mb-4">
                    Anxiety is a complex response to real or perceived threats. It can involve cognitive, physical, and behavioral changes.
                </p>
                <p className="text-lg mb-8">
                    Real or perceived danger causes a rush of adrenaline, a hormone and chemical messenger in the brain, which in turn triggers these anxiety reactions in a process called the fight-or-flight response. Some people may experience this response in difficult social situations or around important events or decisions.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Symptoms</h2>
                <ul className="list-disc list-inside mb-4">
                    <li className="text-lg">Restlessness</li>
                    <li className="text-lg">Uncontrollable feelings of worry</li>
                    <li className="text-lg">Increased irritability</li>
                    <li className="text-lg">Difficulty concentrating</li>
                    <li className="text-lg">Sleep difficulties</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4">Types</h2>
                <p className="text-lg mb-8">
                    The Diagnostic and Statistical Manual of Mental Health Disorders: 5th Edition, text revision (DSM-5-TR) classifies anxiety disorders into several main types.
                </p>
                {/* Types of anxiety disorders */}
                <h2 className="text-2xl font-semibold mb-4">Causes</h2>
                <p className="text-lg mb-8">
                    The causes of anxiety disorders are complicated. Many might occur at once, some may lead to others, and some might not lead to an anxiety disorder unless another is present.
                </p>
                {/* Causes of anxiety disorders */}
                <h2 className="text-2xl font-semibold mb-4">Treatment</h2>
                <p className="text-lg mb-8">
                    Treatment often consists of psychotherapy, behavioral therapy, and medication.
                </p>
                {/* Treatment of anxiety disorders */}
                <h2 className="text-2xl font-semibold mb-4">Prevention</h2>
                <p className="text-lg mb-4">
                    There are ways to reduce the risk of anxiety disorders. Remember that anxious feelings are a natural factor of daily life, and experiencing them does not always indicate the presence of a mental health disorder.
                </p>
                {/* Prevention of anxiety disorders */}
                {/* Button to seek professional help */}
                <div className="text-center">
                    <a href="/calendly" className="bg-blue-500 text-white py-3 px-6 rounded-lg inline-block hover:bg-blue-600 transition duration-300">Seek Professional Help</a>
                </div>
            </div>
        </div>
    );
};

export default AnxietyPage;
