import React from 'react';

import { AnswerObject } from '../App';

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNo: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNo, totalQuestions }) => {
	return (
		<div>
			<p className="number">
				Question: {questionNo} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			{answers.map((answer, ind) => (
				<div key={ind}>
					<button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</div>
			))}
		</div>
	);
};

export default QuestionCard;
