import { FaGithub } from 'react-icons/fa';

import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Education',
		items: [
			{
				title: 'B.Tech in Artificial Intelligence and Data Science',
				place:
					'Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College',
				timePeriod: '2024 – 2028 | CGPA: 7.83',
				description: '',
			},
			{
				title: 'Lower and Higher Secondary School',
				place: 'Best Matric Higher Secondary School',
				timePeriod: '2013 – 2024',
				description: '',
			},
		],
	},
	{
		title: 'Experience',
		items: [
			{
				title: 'Front-End Developer / UI & UX Designer',
				place: 'Vyphera Groups',
				timePeriod: 'September 2025 – Present',
				description: (
					<ul>
						<li>
							Member of the Front-End Development Team working on
							production-level applications.
						</li>
						<li>Developed responsive and accessible user interfaces.</li>
						<li>Collaborated with backend teams for seamless integration.</li>
						<li>Improved performance and cross-device compatibility.</li>
					</ul>
				),
			},

			{
				title: 'Computer Vision Intern',
				place: 'NSIC – National Small Industries Corporation',
				timePeriod: 'December 2025 – January 2026',
				description: (
					<ul>
						<li>
							Worked on image processing and computer vision fundamentals.
						</li>
						<li>Implemented vision-based solutions using Python.</li>
						<li>Applied AI techniques to real-world datasets.</li>
						<li>
							Assisted in analyzing visual data outputs and optimizing basic
							model performance for better accuracy and responsiveness across
							datasets.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Projects',
		items: [
			{
				title: 'StudX (Edu Tech)',
				place: '',
				timePeriod: '',
				description: (
					<>
						<ul>
							<li>
								Developed an integrated digital campus management platform that
								centralizes academic and administrative processes.
							</li>
							<li>
								Enables students, faculty, and administrators to access
								essential institutional activities through a single mobile
								application.
							</li>
							<li>
								Improves overall operational efficiency, data transparency, and
								accessibility across the institution.
							</li>
						</ul>
						<div
							style={{
								display: 'flex',
								gap: '8px',
								flexWrap: 'wrap',
								marginTop: '1rem',
								marginBottom: '1rem',
							}}
						>
							{[
								'Flutter',
								'Dart',
								'Kotlin',
								'Swift',
								'Android SDK',
								'iOS SDK',
							].map((tech) => (
								<span
									key={tech}
									className='project-tag'
								>
									{tech}
								</span>
							))}
						</div>
						<a
							href='https://github.com/harsha4207/StudX-Main-Repo'
							target='_blank'
							rel='noopener noreferrer'
							className='view-project-btn'
							style={{ marginTop: '1rem' }}
						>
							<FaGithub size={18} />
							<div>Source Code</div>
						</a>
					</>
				),
			},
			{
				title: 'Smart Expense Visualizer with Machine Learning Insights',
				place: '',
				timePeriod: '',
				description: (
					<>
						<ul>
							<li>Developed an intelligent expense tracking system.</li>
							<li>Implemented alerts based on spending thresholds.</li>
							<li>
								Designed a scalable architecture to handle user expense data
								efficiently and securely.
							</li>
							<li>
								Integrated data visualization techniques to provide clear
								insights into spending patterns and trends.
							</li>
						</ul>
						<div
							style={{
								display: 'flex',
								gap: '8px',
								flexWrap: 'wrap',
								marginTop: '1rem',
								marginBottom: '1rem',
							}}
						>
							{[
								'HTML5',
								'CSS3',
								'JavaScript',
								'Python',
								'Machine Learning Models',
							].map((tech) => (
								<span
									key={tech}
									className='project-tag'
								>
									{tech}
								</span>
							))}
						</div>
						<a
							href='https://github.com/mohamednowfal-cyber/MP-Smart-Expense'
							target='_blank'
							rel='noopener noreferrer'
							className='view-project-btn'
							style={{ marginTop: '1rem' }}
						>
							<FaGithub size={18} />
							<div>Source Code</div>
						</a>
					</>
				),
			},
			{
				title: 'IPL Mock Auction System (Web)',
				place: '',
				timePeriod: '',
				description: (
					<>
						<ul>
							<li>
								Built a web-based IPL-style auction simulator with dynamic
								bidding logic.
							</li>
							<li>
								Designed an intuitive interface for team and player management.
							</li>
							<li>
								Implemented structured application logic to manage real-time
								bidding scenarios and team constraints.
							</li>
							<li>
								Ensured a responsive and user-friendly interface optimized for
								smooth interaction across devices.
							</li>
						</ul>
						<div
							style={{
								display: 'flex',
								gap: '8px',
								flexWrap: 'wrap',
								marginTop: '1rem',
								marginBottom: '1rem',
							}}
						>
							{['HTML5', 'CSS3', 'JavaScript', 'Flask', 'SQLite'].map(
								(tech) => (
									<span
										key={tech}
										className='project-tag'
									>
										{tech}
									</span>
								),
							)}
						</div>
						<a
							href='https://github.com/mohamednowfal-cyber/IPL-AUCTION-MODEL-WEB'
							target='_blank'
							rel='noopener noreferrer'
							className='view-project-btn'
							style={{ marginTop: '1rem' }}
						>
							<FaGithub size={18} />
							<div>Source Code</div>
						</a>
					</>
				),
			},
		],
	},
	{
		title: 'Certifications',
		items: [
			{
				title: 'The Joy of Computing Using Python',
				place: 'NPTEL (Swayam)',
				timePeriod: 'February – May 2026',
				description:
					'Completed structured training in Python programming, focusing on core language fundamentals, algorithmic thinking, and computational problem-solving techniques.',
			},
			{
				title: 'Programming in Java',
				place: 'NPTEL (Swayam)',
				timePeriod: 'July – October 2025',
				description:
					'Completed structured training in object-oriented programming using Java, focusing on core OOP principles, backend logic, and problem-solving techniques. Gained hands-on experience in writing clean, maintainable code and applying Java concepts to real-world programming scenarios.',
			},
			{
				title: 'Introduction to Artificial Intelligence',
				place: 'IBM Skills Build',
				timePeriod: 'August 2025',
				description:
					'Developed a foundational understanding of artificial intelligence concepts, including intelligent systems, basic machine learning workflows, and algorithmic thinking. Explored how AI techniques are applied to solve practical and data-driven problems.',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p>
						I'm a Front-End Developer and UI/UX Designer with a background in AI
						and Data Science. I focus on building responsive, user-centered web
						applications that balance performance, usability, and visual
						clarity.
					</p>
					<p>
						Collaborating with teams, I use modern frontend technologies and
						design tools to deliver scalable solutions, always driven by a
						passion for continuous learning and clean design systems.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>{place}</p>
										<p className='place'>{timePeriod}</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
