import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Education',
		items: [
			{
				title: 'B.Tech in Artificial Intelligence and Data Science',
				place: 'Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College',
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
							Member of the Front-End Development Team working on production-level applications.
						</li>
						<li>
							Developed responsive and accessible user interfaces.
						</li>
						<li>
							Collaborated with backend teams for seamless integration.
						</li>
						<li>
							Improved performance and cross-device compatibility.
						</li>
					</ul>
				),
			},
			{
				title: 'Data Science Intern',
				place: 'Prodigy Infotech',
				timePeriod: 'August 2025 – September 2025',
				description: (
					<ul>
						<li>
							Performed data preprocessing and model evaluation.
						</li>
						<li>
							Implemented machine learning workflows using Python.
						</li>
						<li>
							Assisted in cleaning and organizing large datasets to improve data consistency and analysis efficiency.
						</li>
						<li>
							Supported the development of basic predictive models and validated results using standard evaluation metrics.
						</li>
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
						<li>
							Implemented vision-based solutions using Python.
						</li>
						<li>
							Applied AI techniques to real-world datasets.
						</li>
						<li>
							Assisted in analyzing visual data outputs and optimizing basic model performance for better accuracy and responsiveness across datasets.
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
				title: 'Smart Expense Visualizer with Machine Learning Insights',
				place: '',
				timePeriod: '',
				description: (
					<>
						<ul>
							<li>Developed an intelligent expense tracking system.</li>
							<li>Implemented alerts based on spending thresholds.</li>
							<li>Designed a scalable architecture to handle user expense data efficiently and securely.</li>
							<li>Integrated data visualization techniques to provide clear insights into spending patterns and trends.</li>
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
							<div>View Project</div>
							<span></span>
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
							<li>Built a web-based IPL-style auction simulator with dynamic bidding logic.</li>
							<li>Designed an intuitive interface for team and player management.</li>
							<li>Implemented structured application logic to manage real-time bidding scenarios and team constraints.</li>
							<li>Ensured a responsive and user-friendly interface optimized for smooth interaction across devices.</li>
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
								)
							)}
						</div>
						<a
							href='https://github.com/mohamednowfal-cyber/IPL-AUCTION-MODEL-WEB'
							target='_blank'
							rel='noopener noreferrer'
							className='view-project-btn'
							style={{ marginTop: '1rem' }}
						>
							<div>View Project</div>
							<span></span>
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
				title: 'Programming in Java',
				place: 'NPTEL (Swayam)',
				timePeriod: 'July – October 2025',
				description: 'Completed structured training in object-oriented programming using Java, focusing on core OOP principles, backend logic, and problem-solving techniques. Gained hands-on experience in writing clean, maintainable code and applying Java concepts to real-world programming scenarios.',
			},
			{
				title: 'Introduction to Artificial Intelligence',
				place: 'IBM Skills Build',
				timePeriod: 'August 2025',
				description: 'Developed a foundational understanding of artificial intelligence concepts, including intelligent systems, basic machine learning workflows, and algorithmic thinking. Explored how AI techniques are applied to solve practical and data-driven problems.',
			},
			{
				title: 'Generative AI for Data Science',
				place: 'Microsoft',
				timePeriod: 'August 2025',
				description: 'Gained exposure to generative AI concepts with a focus on data science applications. Learned how AI-assisted models support data analysis, model understanding, and prompt-driven workflows for intelligent decision-making.',
			},
			{
				title: 'UX Design',
				place: 'Lloyds Banking Group',
				timePeriod: 'January 2026',
				description: 'Learned user-centered design principles with emphasis on usability, accessibility, and intuitive interface design. Applied design thinking methods, wireframing, and usability testing to create effective digital experiences.',
			},
			{
				title: 'Cyber Security',
				place: 'Deloitte',
				timePeriod: 'January 2026',
				description: 'Acquired foundational knowledge of cyber security concepts, including digital safety, secure system awareness, and data protection practices. Understood common security risks and best practices for maintaining secure digital environments.',
			},
			{
				title: 'Gemini Student',
				place: 'Google',
				timePeriod: '2026 – 2029',
				description: 'Explored practical use of Google Gemini for AI-powered productivity and real-world applications. Gained hands-on experience with prompt engineering and understanding generative AI capabilities in modern workflows.',
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
						I'm a Front-End Developer and UI/UX Designer with a strong foundation in Artificial Intelligence and Data Science, focused on building responsive, user-centered web applications. I enjoy translating complex ideas into intuitive, accessible interfaces that balance performance, usability, and visual clarity.
					</p>
					<p>
						With hands-on experience in modern frontend technologies and design tools, I collaborate closely with cross-functional teams to deliver scalable, production-ready solutions. I'm passionate about continuous learning, thoughtful design systems, and crafting digital experiences that feel smooth, purposeful, and impactful.
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
										<p className='place'>
											{place}
										</p>
										<p className='place'>
											{timePeriod}
										</p>
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
