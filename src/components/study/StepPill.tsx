interface StepPillProps {
  step: string;
  label: string;
  active: boolean;
}

export function StepPill({ step, label, active }: StepPillProps) {
  return (
    <div className={`step-pill ${active ? 'active' : ''}`}>
      <span className="step-number">{step}</span>
      <span>{label}</span>
    </div>
  );
}
