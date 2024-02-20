import React from 'react'

const exercises = [
    { id: 1, name: 'Tree Pose', description: 'The Tree Pose, or Vrksasana, helps strengthen your balance.', gifUrl: 'https://www.sheknows.com/wp-content/uploads/2018/08/gijnkznlgwzt0bcb1bgp.gif?w=600' },
    { id: 2, name: 'Standing Forward Bend', description: 'Wake up your hamstrings with the Standing Forward Bend', gifUrl: 'https://www.sheknows.com/wp-content/uploads/2018/08/wafkppmd5au2iksvvpsj.gif?w=600' },
    { id: 3, name: 'Seated Forward Bend', description: 'Also great for your hamstrings, stretch it out with the Seated Forward Bend. ', gifUrl: 'https://www.sheknows.com/wp-content/uploads/2018/08/wqwoywcreesk3jvgeizf.gif?w=600' },
    { id: 4, name: 'Side Plank Pose', description: ' Strengthen your arms and wrists with this challenging pose.', gifUrl: 'https://www.sheknows.com/wp-content/uploads/2018/08/jpzzccg4e8pvdkvvlrd6.gif?w=600' },
    { id: 5, name: 'Cat-Cow Pose', description: 'This pose is a great warm-up to your yoga session.', gifUrl: 'https://www.sheknows.com/wp-content/uploads/2018/08/jwmpi0rqipzgycnv7aqf.gif?w=600' },
    { id: 6, name: 'Runner’s Lunge Pose', description: ' Another great warm-up pose, the Runner Lunge strengthens your arms, back, hips and legs', gifUrl: 'https://www.sheknows.com/wp-content/uploads/2018/08/qfvckayzohxmqjhodhee.gif?w=600' },
    // Add more exercises as needed
];

// ExerciseCard component to display each exercise
const ExerciseCard = ({ exercise }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-96 object-cover" src={exercise.gifUrl} alt={exercise.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">{exercise.name}</div>
                <p className="text-gray-700 text-base">{exercise.description}</p>
            </div>
        </div>
    );
};

// ExerciseList component to display list of exercises as cards
const ExerciseList = ({ exercises }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercises.map(exercise => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
        </div>
    );
};

function Exercise() {

    return (
        <div className="container mx-auto h-auto m-12">
            <div className="flex flex-col items-center justify-center h-auto m-5 ">
                <div className="max-w-3xl p-8 text-center">
                    <h1 className="text-4xl font-bold mb-8">Yoga: A Step Towards Wellbeing</h1>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aut eius consectetur ducimus eveniet.
                        Adipisci numquam cupiditate dolore ad odio at, placeat modi dolores blanditiis eum excepturi nostrum eos
                        aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at, et laudantium ad
                        praesentium consequatur fugiat eius doloremque commodi adipisci placeat sint est incidunt impedit tempora
                        iusto corporis totam assumenda.
                    </p>
                </div>
            </div>
            <h1 className="text-3xl font-semibold text-center mb-8">Types of YOGA</h1>
            <ExerciseList exercises={exercises} />
        </div>
    );

}

export default Exercise
