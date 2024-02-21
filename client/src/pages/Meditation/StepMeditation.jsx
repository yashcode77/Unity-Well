import React from 'react';
import summ from '../../assets/images/meditation_summ.jpg'

const StepMeditation = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-semibold mb-8">Nadabrahma Meditation</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">What is Nadabrahma Meditation?</h2>
                    <p className="text-lg mb-4">
                        Nadabrahma meditation, also known as “Tibetan Humming Meditation,” was developed by Tibetan masters. It is a chanting meditation aimed at achieving a state of "empty mind" by shutting down the incessant chatter of thoughts.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Setting Up the Environment</h2>
                    <p className="text-lg mb-4">
                        Nadabrahma meditation can be practiced at any time of the day. However, it is recommended to create a peaceful environment conducive to meditation. A dimly lit room with four candles and a calming fragrance can enhance the meditative experience. It is advisable to practice on an empty stomach or at least 2 hours after a meal.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-center">How to Practice Nadabrahma Meditation</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2 text-center">Stage 1 – Humming</h3>
                        <p className="text-lg mb-4">
                            Sit in a relaxed position with your eyes and lips closed. Begin the meditation by humming. The humming should be audible and intense enough to create vibrations throughout your body. There are no rules for humming; you can vary the pitch as you feel intuitively. Allow the humming to become spontaneous, and become a passive listener.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2 text-center">Stage 2 – Circular Movement of Palm</h3>
                        <p className="text-lg mb-4">
                            This stage is divided into two 7.5-minute segments:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li className="text-lg">
                                <strong>First Half:</strong> Sit in a relaxed posture and raise your hands with palms facing up near your navel. Slowly move your palms outward in a circular motion, visualizing energy radiating out into the universe.
                            </li>
                            <li className="text-lg">
                                <strong>Second Half:</strong> After 7.5 minutes, turn your palms downward and reverse the circular motion, bringing your palms back together near your navel. Feel the energy being drawn inward.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-center">Stage 3 – Silent Observation</h3>
                        <p className="text-lg mb-4">
                            Sit quietly and motionless for 15 minutes. The goal is to enter a state of silent observation. If you find yourself losing awareness, you may drift into a deep sleep, which is not conducive to meditation. The humming facilitates alignment of the body and mind, allowing you to experience a rare harmony. By practicing this technique regularly, you can overcome obstacles to meditation.
                        </p>
                    </div>
                </div>

                <p className="text-lg">
                    It is important not to judge the technique after the initial practice. Consistent practice over at least seven sessions is necessary to experience the deeper benefits of meditation. Do not become attached to any pleasurable experiences that may arise during meditation; instead, focus on achieving a meditative state in the final stage.
                </p>
                <div className='flex justify-center'>
                    <img className=' m-5 w-auto h-auto' src={summ} alt="Gadbad" />
                </div>

            </div>
        </div>
    );

};

export default StepMeditation;
