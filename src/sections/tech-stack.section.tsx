import { BiLogoPostgresql } from 'react-icons/bi';
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import {
	SiFigma,
	SiFirebase,
	SiFlutter,
	SiFramer,
	SiGit,
	SiMongodb,
	SiMui,
	SiMysql,
	SiRadixui,
	SiShadcnui,
	SiTailwindcss,
	SiVite,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Core Stack I Work With',
		items: [
			{
				title: 'Next JS',
				icon: <TbBrandNextjs color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'React JS',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99)',
			},
			{
				title: 'HTML5',
				icon: <FaHtml5 color='rgb(227, 76, 38)' />,
				color: 'rgba(227, 76, 38, 0.6)',
			},
			{
				title: 'CSS3',
				icon: <FaCss3Alt color='rgb(38, 77, 228)' />,
				color: 'rgba(38, 77, 228, 0.6)',
			},
			{
				title: 'Vite',
				icon: <SiVite color='rgb(100, 108, 255)' />,
				color: 'rgba(100, 108, 255, 0.6)',
			},
		],
	},
	{
		heading: 'UI & Styling',
		items: [
			{
				title: 'Material UI',
				icon: <SiMui color='rgb(0, 127, 255)' />,
				color: 'rgb(0, 127, 255, 0.6)',
			},
			{
				title: 'ShadCn UI',
				icon: <SiShadcnui color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgb(6, 182, 212, 0.7)',
			},
			{
				title: 'Spline',
				icon: <img src='/spline-logo.jpg' alt='Spline' style={{ width: '50%', height: '50%', objectFit: 'contain', borderRadius: '50%' }} />,
				color: 'rgb(255, 95, 109, 0.6)',
			},
			{
				title: 'Framer Motion',
				icon: <SiFramer color='rgb(0, 153, 255)' />,
				color: 'rgba(0, 153, 255, 0.6)',
			},
			{
				title: 'Radix UI',
				icon: <SiRadixui color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.6)',
			},
		],
	},
	{
		heading: 'Tools & Platforms I Use',
		items: [
			{
				title: 'Git',
				icon: <SiGit color='rgb(240, 80, 50)' />,
				color: 'rgba(240, 80, 50, 0.6)',
			},
			{
				title: 'Flutter',
				icon: <SiFlutter color='rgb(66, 165, 245)' />,
				color: 'rgba(66, 165, 245, 0.6)',
			},
			{
				title: 'Android Studio',
				icon: <img src='/android-studio-logo.png' alt='Android Studio' style={{ width: '50%', height: '50%', objectFit: 'contain' }} />,
				color: 'rgb(61, 219, 132, 0.6)',
			},
			{
				title: 'Figma',
				icon: <SiFigma color='rgb(162, 89, 255)' />,
				color: 'rgba(162, 89, 255, 0.6)',
			},
			{
				title: 'GitHub',
				icon: <FaGithub color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.6)',
			},
		],
	},
	{
		heading: 'Databases I Use',
		items: [
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 117, 143)' />,
				color: 'rgba(0, 117, 143, 0.6)',
			},
			{
				title: 'MongoDB',
				icon: <SiMongodb color='rgb(71, 162, 72)' />,
				color: 'rgba(71, 162, 72, 0.6)',
			},
			{
				title: 'Firebase',
				icon: <SiFirebase color='rgb(255, 202, 40)' />,
				color: 'rgba(255, 202, 40, 0.6)',
			},
			{
				title: 'PostgreSQL',
				icon: <BiLogoPostgresql color='rgb(51, 103, 145)' />,
				color: 'rgba(51, 103, 145, 0.6)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};
