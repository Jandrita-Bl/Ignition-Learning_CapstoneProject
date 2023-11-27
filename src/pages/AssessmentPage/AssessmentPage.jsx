import "./AssessmentPage.scss";
import MainNav from "../../components/1-MainNav/MainNav";
import ResultCircle from "../../components/3-ResultCircle/ResultCircle";

import React, { useState, useEffect } from 'react';



function AssessmentPageJSX() {

    const [answers, setAnswers] = useState({
        q1: '', q2: '', q3: '', q4: '' , q5: '', q6: ''
    });



    const [showResults, setShowResults] = useState(false);
    const [percentages, setPercentages] = useState({ A: 0, B: 0, C: 0, D: 0 });

    useEffect(() => {
        const savedPercentages = localStorage.getItem('assessmentPercentages');
        if (savedPercentages) {
            setPercentages(JSON.parse(savedPercentages));
            setShowResults(true);
        }
    }, []);



    const handleAnswerChange = (question, value) => {
        setAnswers(prev => ({ ...prev, [question]: value }));
    };

    const calculateResults = () => {
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        Object.values(answers).forEach(answer => {
            if (answer) counts[answer]++;
        });

        const total = Object.values(counts).reduce((acc, curr) => acc + curr, 0);
        const calculatedPercentages = {
            A: (counts.A / total) * 100,
            B: (counts.B / total) * 100,
            C: (counts.C / total) * 100,
            D: (counts.D / total) * 100,
        };

        setPercentages(calculatedPercentages);
        setShowResults(true);

        localStorage.setItem('assessmentPercentages', JSON.stringify(calculatedPercentages));
        setPercentages(calculatedPercentages);
        setShowResults(true);
    

    };

    const renderCircle = (percentage, color) => {
        const strokeDasharray = `${percentage}, 100`;
        return (
            <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    stroke={color}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    strokeDasharray={strokeDasharray}
                />
                <text x="18" y="20.35" className="percentage">{Math.round(percentage)}%</text>
            </svg>
        );
    };

    const resetAssessment = () => {
        localStorage.removeItem('assessmentPercentages');
        setShowResults(false);
        setAnswers({ q1: '', q2: '', q3: '' });
        setPercentages({ A: 0, B: 0, C: 0, D: 0 });
    };

    return (
        <div className="assessment__page">
            <MainNav />
            <div className="assessment__container">
                <h2 className="assessmen__headert">Learning Style Assessment</h2>


                <div className="results__container">
                    <ResultCircle percentage={percentages.A} color="#ff6384" label="Read/Write" />
                    <ResultCircle percentage={percentages.B} color="#36a2eb" label="Visual" />
                    <ResultCircle percentage={percentages.C} color="#ffcd56" label="Auditory" />
                    <ResultCircle percentage={percentages.D} color="#4bc0c0" label="Kinesthetic" />
                </div>

                {/* Question 1 */}
                <div className="question">
                    <p className="text">1. When learning something new, I prefer:</p>
                    <div className="options">
                        <label>
                            <input
                                type="radio"
                                name="q1"
                                value="A"
                                onChange={() => handleAnswerChange('q1', 'A')}
                                checked={answers.q1 === 'A'}
                            /> Reading instructions or books
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q1"
                                value="B"
                                onChange={() => handleAnswerChange('q1', 'B')}
                                checked={answers.q1 === 'B'}
                            /> Watching videos or looking at diagrams
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q1"
                                value="C"
                                onChange={() => handleAnswerChange('q1', 'C')}
                                checked={answers.q1 === 'C'}
                            /> Listening to someone explain it
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q1"
                                value="D"
                                onChange={() => handleAnswerChange('q1', 'D')}
                                checked={answers.q1 === 'D'}
                            /> Getting hands-on experience
                        </label>
                    </div>
                </div>

                {/* Question 2 */}
                <div className="question">
                    <p>2. My memory is best when I:</p>
                    <div className="options">
                        <label>
                            <input
                                type="radio"
                                name="q2"
                                value="A"
                                onChange={() => handleAnswerChange('q2', 'A')}
                                checked={answers.q2 === 'A'}
                            /> Write things down or read them.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q2"
                                value="B"
                                onChange={() => handleAnswerChange('q2', 'B')}
                                checked={answers.q2 === 'B'}
                            />  Visualize or see pictures.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q2"
                                value="C"
                                onChange={() => handleAnswerChange('q2', 'C')}
                                checked={answers.q2 === 'C'}
                            /> Hear or discuss topics.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q2"
                                value="D"
                                onChange={() => handleAnswerChange('q2', 'D')}
                                checked={answers.q2 === 'D'}
                            />  Do or practice activities.
                        </label>
                    </div>
                </div>


               {/* Question 3 */}
               <div className="question">
                    <p>3. In a cooking class, you learn best by:</p>
                    <div className="options">
                        <label>
                            <input
                                type="radio"
                                name="q3"
                                value="A"
                                onChange={() => handleAnswerChange('q3', 'A')}
                                checked={answers.q3 === 'A'}
                            /> Reading the recipe.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q3"
                                value="B"
                                onChange={() => handleAnswerChange('q3', 'B')}
                                checked={answers.q3 === 'B'}
                            /> Watching the chef's demonstration.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q3"
                                value="C"
                                onChange={() => handleAnswerChange('q3', 'C')}
                                checked={answers.q3 === 'C'}
                            /> Listening to the chef's instructions.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q3"
                                value="D"
                                onChange={() => handleAnswerChange('q3', 'D')}
                                checked={answers.q3 === 'D'}
                            /> Cooking along with the chef.
                        </label>
                    </div>
                </div>


                 {/* Question 4 */}
                 <div className="question">
                    <p>4. When assembling a new gadget, you:</p>
                    <div className="options">
                        <label>
                            <input
                                type="radio"
                                name="q4"
                                value="A"
                                onChange={() => handleAnswerChange('q4', 'A')}
                                checked={answers.q4 === 'A'}
                            />  Read the instruction manual.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q4"
                                value="B"
                                onChange={() => handleAnswerChange('q4', 'B')}
                                checked={answers.q4 === 'B'}
                            />  Look at the diagram.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q4"
                                value="C"
                                onChange={() => handleAnswerChange('q4', 'C')}
                                checked={answers.q4 === 'C'}
                            /> Listen to an explanatory video.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q4"
                                value="D"
                                onChange={() => handleAnswerChange('q4', 'D')}
                                checked={answers.q4 === 'D'}
                            /> Start assembling and learn by trial and error.
                        </label>
                    </div>
                </div>


                 {/* Question 5 */}
                 <div className="question">
                    <p>5. My notes are usually:</p>
                    <div className="options">
                        <label>
                            <input
                                type="radio"
                                name="q5"
                                value="A"
                                onChange={() => handleAnswerChange('q5', 'A')}
                                checked={answers.q5 === 'A'}
                            /> Written with lots of text.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q5"
                                value="B"
                                onChange={() => handleAnswerChange('q5', 'B')}
                                checked={answers.q5 === 'B'}
                            /> Full of diagrams and sketches.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q5"
                                value="C"
                                onChange={() => handleAnswerChange('q5', 'C')}
                                checked={answers.q5 === 'C'}
                            />  I prefer to record notes.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q5"
                                value="D"
                                onChange={() => handleAnswerChange('q5', 'D')}
                                checked={answers.q5 === 'D'}
                            /> Minimal, I remember by doing.
                        </label>
                    </div>
                </div>


                 {/* Question 6 */}
                 <div className="question">
                    <p>6.  In a museum, you prefer to:</p>
                    <div className="options">
                        <label>
                            <input
                                type="radio"
                                name="q6"
                                value="A"
                                onChange={() => handleAnswerChange('q6', 'A')}
                                checked={answers.q6 === 'A'}
                            />  Read the information next to exhibits.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q6"
                                value="B"
                                onChange={() => handleAnswerChange('q6', 'B')}
                                checked={answers.q6 === 'B'}
                            /> Look at the visuals and exhibits.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q6"
                                value="C"
                                onChange={() => handleAnswerChange('q6', 'C')}
                                checked={answers.q6 === 'C'}
                            /> Use an audio guide.
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="q6"
                                value="D"
                                onChange={() => handleAnswerChange('q6', 'D')}
                                checked={answers.q6 === 'D'}
                            /> Participate in hands-on activities.
                        </label>
                    </div>
                </div>


                <button onClick={calculateResults}>Submit</button>
{showResults && (
    <button onClick={resetAssessment}>Retake</button>
)}
            </div>
        </div>
    );
  }

export default AssessmentPageJSX;
