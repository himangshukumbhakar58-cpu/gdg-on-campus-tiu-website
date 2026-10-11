/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EventItem {
  id: string;
  title: string;
  category: 'Conference' | 'Challenge' | 'Workshop' | 'Bootcamp';
  date: string;
  time: string;
  venue: string;
  type: 'In-Person' | 'Hybrid' | 'Virtual';
  shortDesc: string;
  fullDesc: string;
  accentColor: 'blue' | 'red' | 'yellow' | 'green';
  status: 'Upcoming' | 'Past' | 'Registration Open';
  attendeesCount: number;
  maxSeats: number;
  imageUrl?: string;
  bannerUrl?: string;
  speakers: {
    name: string;
    role: string;
    company: string;
    avatarUrl?: string;
  }[];
  agenda: {
    time: string;
    title: string;
    speaker?: string;
  }[];
  tags: string[];
}

export interface Organizer {
  id: string;
  name: string;
  role: string;
  domain?: string;
  focusArea: string;
  bio: string;
  avatarUrl?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  accentColor: 'blue' | 'red' | 'yellow' | 'green';
}

export interface TechTrack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: 'blue' | 'red' | 'yellow' | 'green';
  technologies: string[];
  keyHighlights: string[];
  workshopsCount: number;
}

export interface StudentProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  techStack: string[];
  stars?: number;
  sdgGoal?: string;
  accentColor: 'blue' | 'red' | 'yellow' | 'green';
  metrics: string;
}

export interface MemberPassData {
  fullName: string;
  email: string;
  department: string;
  year: string;
  track: string;
  memberId: string;
  joinedDate: string;
}
