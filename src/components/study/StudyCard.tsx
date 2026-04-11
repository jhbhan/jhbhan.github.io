interface StudyCardProps {
  study: {
    name: string;
    reliability_score: number;
    keywords: string[];
  };
  selectedKeywords: string[];
  onToggleKeyword: (keyword: string) => void;
  onCompare: () => void;
  maxResults?: number;
  setMaxResults?: (num: number) => void;
  comparing: boolean;
  compareError: string;
}

export function StudyCard({
  study,
  selectedKeywords,
  onToggleKeyword,
  onCompare,
  comparing,
  compareError,
  maxResults = 10,
  setMaxResults,
}: StudyCardProps) {
  return (
    <section className="panel panel-elevated">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Validated study</p>
          <h2>{study.name}</h2>
        </div>
        <div className="score-chip">
          <span>Reliability</span>
          <strong>{study.reliability_score}/100</strong>
        </div>
      </div>

      <p className="panel-copy">
        Select the extracted keywords you want to use when finding related studies.
      </p>

      <div className="keywords-container">
        {study.keywords.map((keyword) => (
          <label
            key={keyword}
            className={`keyword-tag ${selectedKeywords.includes(keyword) ? 'selected' : ''}`}
          >
            <input
              type="checkbox"
              checked={selectedKeywords.includes(keyword)}
              onChange={() => onToggleKeyword(keyword)}
            />
            <span>{keyword}</span>
          </label>
        ))}
      </div>

      <p className="panel-copy">
        Select max number of study results to compare with (default 10, max 20)
      </p>
      <input
        type="number"
        min={1}
        max={20}
        defaultValue={10}
        className="number-input"
        id="num-results-input"
        value={maxResults}
        onChange={(e) => setMaxResults && setMaxResults(Number(e.target.value))}
      />

      {compareError && <p className="error-message">{compareError}</p>}

      <div className="panel-actions">
        <button type="button" onClick={onCompare} disabled={comparing}>
          {comparing ? 'Comparing...' : 'Compare Study'}
        </button>
      </div>
    </section>
  );
}
