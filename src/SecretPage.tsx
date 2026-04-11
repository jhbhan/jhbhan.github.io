import { useState } from 'react';
import { literatureApi } from './api/literatureApi';
import { StepPill } from './components/StepPill';
import { StudyCard } from './components/StudyCard';
import { ResultsList } from './components/ResultsList';
import './SecretPage.css';

export function SecretPage() {
  const [studyTitle, setStudyTitle] = useState('');
  const [searchError, setSearchError] = useState('');
  const [compareError, setCompareError] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isComparing, setIsComparing] = useState(false);
  const [study, setStudy] = useState<{
    name: string;
    reliability_score: number;
    keywords: string[];
  } | null>(null);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [maxResults, setMaxResults] = useState(10);
  const [results, setResults] = useState<
    Array<{
      name: string;
      reliability_score: number;
      comparison: 'superior' | 'equivalent' | 'inferior';
    }>
  >([]);

  const activeStep = results.length > 0 ? 3 : study ? 2 : 1;

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    const query = studyTitle.trim();

    if (!query) {
      setSearchError('Enter a study title to continue.');
      return;
    }

    setIsSearching(true);
    setSearchError('');
    setCompareError('');
    setResults([]);

    try {
      const response = await literatureApi.checkStudy(query);
      setStudy(response);
      setSelectedKeywords(response.keywords);
    } catch (error) {
      setStudy(null);
      setSelectedKeywords([]);
      setSearchError((error as Error).message);
    } finally {
      setIsSearching(false);
    }
  };

  const handleToggleKeyword = (keyword: string) => {
    setCompareError('');
    setSelectedKeywords((currentKeywords) =>
      currentKeywords.includes(keyword)
        ? currentKeywords.filter((item) => item !== keyword)
        : [...currentKeywords, keyword]
    );
  };

  const handleCompare = async () => {
    if (selectedKeywords.length === 0) {
      setCompareError('Please select at least one keyword.');
      return;
    }

    setIsComparing(true);
    setCompareError('');

    try {
      const response = await literatureApi.getStudies(selectedKeywords, maxResults);
      setResults(response.studies);
    } catch (error) {
      setCompareError('Failed to retrieve comparison studies.');
    } finally {
      setIsComparing(false);
    }
  };

  const handleReset = () => {
    setStudyTitle('');
    setSearchError('');
    setCompareError('');
    setIsSearching(false);
    setIsComparing(false);
    setStudy(null);
    setSelectedKeywords([]);
    setResults([]);
  };

  return (
    <div className="app-shell">
      <div className="page-glow page-glow-left"></div>
      <div className="page-glow page-glow-right"></div>

      <main className="container">
        <section className="hero panel">
          <p className="eyebrow">Scientific study comparison</p>
          <h1>LitReview</h1>
          <p className="hero-copy">
            Validate a study, tune the extracted keywords, and compare nearby literature in a
            single React-driven workflow.
          </p>

          <div className="steps-row" aria-label="Workflow progress">
            <StepPill step="01" label="Search" active={activeStep >= 1} />
            <StepPill step="02" label="Select Keywords" active={activeStep >= 2} />
            <StepPill step="03" label="Review Matches" active={activeStep >= 3} />
          </div>
        </section>

        <section className="panel panel-elevated search-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Step 1</p>
              <h2>Search for a source study</h2>
            </div>
          </div>

          <form className="search-form" onSubmit={handleSearch}>
            <label className="search-label" htmlFor="study-title">
              Study title
            </label>
            <div className="input-group">
              <input
                id="study-title"
                type="text"
                value={studyTitle}
                placeholder="Enter study title..."
                onChange={(event) => setStudyTitle(event.target.value)}
                aria-describedby="search-help"
              />
              <button type="submit" disabled={isSearching}>
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </div>
            <p id="search-help" className="helper-text">
              Try "Canine", "Feline", "Equine", or "Avian" with the mock dataset.
            </p>
            {searchError && <p className="error-message">{searchError}</p>}
          </form>
        </section>

        {study && results.length === 0 && (
          <StudyCard
            study={study}
            selectedKeywords={selectedKeywords}
            onToggleKeyword={handleToggleKeyword}
            onCompare={handleCompare}
            comparing={isComparing}
            maxResults={maxResults}
            setMaxResults={setMaxResults}
            compareError={compareError}

          />
        )}

        {results.length > 0 && <ResultsList results={results} onReset={handleReset} />}

        <footer className="app-footer">
          <p>LitReview App · React SPA prototype · 2026</p>
        </footer>
      </main>
    </div>
  );
}
