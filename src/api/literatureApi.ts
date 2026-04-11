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

const URL = "https://8539852b27d737c54d69d5a15610e246.balena-devices.com";
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
