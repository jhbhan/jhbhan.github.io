export interface Study {
  title: string;
  reliability_score: number;
  keywords: string[];
}

export interface ComparisonStudy {
  name: string;
  reliability_score: number;
  comparison: 'superior' | 'equivalent' | 'inferior';
}

export interface StudyResult {
  name: string;
  reliability_score: number;
  keywords: string[];
}

export interface ComparisonResult {
  studies: ComparisonStudy[];
}

const mockStudies: Study[] = [
  {
    title: 'Canine Hip Dysplasia',
    reliability_score: 85,
    keywords: ['canine', 'hip', 'dysplasia', 'surgery', 'recovery'],
  },
  {
    title: 'Feline Obesity Management',
    reliability_score: 92,
    keywords: ['feline', 'obesity', 'diet', 'exercise', 'weight-loss'],
  },
  {
    title: 'Equine Laminitis Review',
    reliability_score: 78,
    keywords: ['equine', 'laminitis', 'hoof', 'inflammation', 'treatment'],
  },
  {
    title: 'Avian Nutrition Trends',
    reliability_score: 65,
    keywords: ['avian', 'nutrition', 'vitamins', 'minerals', 'foraging'],
  },
];

const mockComparisonStudies: ComparisonStudy[] = [
  {
    name: 'Surgical Outcomes in Hip Dysplasia',
    reliability_score: 90,
    comparison: 'superior',
  },
  {
    name: 'Rehabilitation for Hip Surgery',
    reliability_score: 82,
    comparison: 'equivalent',
  },
  {
    name: 'Non-surgical Hip Management',
    reliability_score: 75,
    comparison: 'inferior',
  },
  {
    name: 'Canine Physical Therapy Basics',
    reliability_score: 88,
    comparison: 'superior',
  },
  {
    name: 'Hip Dysplasia Prevention Study',
    reliability_score: 60,
    comparison: 'inferior',
  },
];

const URL = "https://8539852b27d737c54d69d5a15610e246.balena-devices.com/trivia";
const checkStudyURL = `${URL}/check-study`;
const getStudiesURL = `${URL}/get-studies`;
export const literatureApi = {
  checkStudy: async (title: string): Promise<StudyResult> => {
    const param = new URLSearchParams();
    param.append('title', title);
    const response = await fetch(`${checkStudyURL}?${param.toString()}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to check study');
    }
    return response.json();
  },

  getStudies: async (
    keywords: string[],
    num_results: number = 10
  ): Promise<ComparisonResult> => {
    const param = new URLSearchParams();
    keywords.forEach((keyword) => param.append('keywords', keyword));
    param.append('num_results', num_results.toString());

    const response = await fetch(`${getStudiesURL}?${param.toString()}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to get comparison studies');
    }

    return response.json();
  },
};
