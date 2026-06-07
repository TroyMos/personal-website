import { AfterViewInit, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type TimelineItem = {
  label: string;
  title: string;
  detail: string;
};

type Project = {
  name: string;
  role: string;
  date: string;
  summary: string;
  linkLabel?: string;
  link?: string;
};

type Review = {
  name: string;
  quote: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
  readonly headline = 'Software Engineer who cares about the human side of building software.';
  readonly photoPath = '/assets/troy-moslemi-photo.jpeg';
  readonly resumePath = '/assets/troy-moslemi-resume.pdf';
  readonly emailAddress = 'troy@troymoslemi.com';
  readonly emailLink = 'mailto:troy@troymoslemi.com';
  readonly linkedInLink = 'https://www.linkedin.com/in/troy-moslemi/';

  readonly workExperience: TimelineItem[] = [
    {
      label: '2025 - Present',
      title: 'Software Engineer, Smart Software Solutions, Inc.',
      detail: 'I work on client-facing full-stack projects using Angular, PHP, Java Spring Boot, Visual Basic, and more, building front-end websites and functional back-end APIs for real business needs.'
    }
  ];

  readonly education: TimelineItem[] = [
    {
      label: '2020 - 2024',
      title: 'Cornell University, Bachelor of Arts in Computer Science',
      detail: 'My Ivy League education gave me a strong computer science foundation that I build upon in my current role.'
    }
  ];

  readonly projects: Project[] = [
    {
      name: "Rise 'n Shine",
      role: 'Software Engineer and Project Lead',
      date: 'February 2024 - May 2024',
      summary: 'Led a team of 10 to launch a 2D cross-platform mobile game in C++ for a game development competition, with major work across networking, documentation, process, and UI/UX coordination.'
    },
    {
      name: 'Bubblebound',
      role: 'Software Engineer',
      date: 'February 2023 - May 2023',
      summary: 'Built a 2D platformer game using Java and LibGDX as part of a team, improving level design workflows with Tiled templates, documentation, and hands-on level creation.',
      linkLabel: 'itch.io',
      link: 'https://fourmidablegames.itch.io/bubblebound'
    }
  ];

  readonly reviews: Review[] = [
    {
      name: 'Jacob',
      quote: 'Great to work with. Responded quickly and gave great feedback. He’s never satisfied and always has things to say to improve. Very thoughtful and encouraging as well. He really takes the time to look through your resume and GitHub links.'
    },
    {
      name: 'Grace',
      quote: 'He gives VERY good, actionable feedback (e.g., formatting, metrics, communicate this point more impressively, etc.), with relevant background for SWE resume reviews. He will also look through everything in your resume, e.g., website projects, etc. Actual legend. Go Big Red'
    }
  ];

  ngAfterViewInit(): void {
    const sectionId = window.location.hash.replace(/^#/, '');

    if (!sectionId || sectionId === 'blogs') {
      return;
    }

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}
