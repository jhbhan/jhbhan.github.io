interface ResultsListProps {
  results: Array<{
    name: string;
    reliability_score: number;
    comparison: 'superior' | 'equivalent' | 'inferior';
  }>;
  onReset: () => void;
}

export function ResultsList({ results, onReset }: ResultsListProps) {
  return (
    <section className="panel panel-elevated">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Comparison results</p>
          <h2>Related studies worth reviewing</h2>
        </div>
        <button type="button" className="ghost-button" onClick={onReset}>
          New Search
        </button>
      </div>

      <div className="results-container">
        {results.map((study) => (
          <article key={study.name} className="result-item">
            <div className="study-info">
              <h3>{study.name}</h3>
              <p>Reliability Score: {study.reliability_score}/100</p>
            </div>
            <span className={`badge ${study.comparison}`}>{study.comparison}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
